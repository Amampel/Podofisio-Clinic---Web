/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/Home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/AboutPage",
        destination: "/nosotros",
        permanent: true,
      },
      {
        source: "/BlogPage",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/ContactPage",
        destination: "/contacto",
        permanent: true,
      },
      {
        source: "/PricingPage",
        destination: "/tarifas",
        permanent: true,
      },
      {
        source: "/ServicesPage",
        destination: "/servicios",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "podofisioclinic.com",
          },
        ],
        destination: "https://www.podofisioclinic.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
