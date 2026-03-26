import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1';
const root = process.cwd();

const app = express();

let vite: any;
if (!isProd) {
  const viteModule = 'vite';
  const { createServer: createViteServer } = await import(viteModule);
  vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });
  app.use(vite.middlewares);
} else {
  // Serve static assets from dist/client
  app.use('/assets', express.static(path.resolve(root, 'dist/client/assets')));
  app.use(express.static(path.resolve(root, 'dist/client'), { index: false }));
}

app.use('*', async (req, res, next) => {
  const url = req.originalUrl;

  try {
    let template: string;
    let render: any;

    if (!isProd) {
      // Development
      template = fs.readFileSync(path.resolve(root, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
    } else {
      // Production
      const templatePath = path.resolve(root, 'dist/client/index.html');
      if (!fs.existsSync(templatePath)) {
        throw new Error(`Template not found at ${templatePath}`);
      }
      template = fs.readFileSync(templatePath, 'utf-8');
      
      const renderPath = path.resolve(root, 'dist/server/entry-server.js');
      if (!fs.existsSync(renderPath)) {
        throw new Error(`Server entry not found at ${renderPath}`);
      }
      render = (await import(renderPath)).render;
    }

    const { html: appHtml, head: headHtml } = await render(url);

    const html = template
      .replace(/<!--head-outlet-->/, headHtml)
      .replace(/<!--ssr-outlet-->/, appHtml);

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (e) {
    if (!isProd && vite) vite.ssrFixStacktrace(e as Error);
    console.error(`SSR Error [${url}]:`, e);
    res.status(500).end(isProd ? 'Internal Server Error' : (e as Error).stack);
  }
});

// Only listen if not in Vercel/Production environment (Vercel handles the listener)
if (!process.env.VERCEL) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

export default app;
