"use client";

import { useState, useEffect } from "react";
import Maintenance from "./Maintenance";

export default function ConstructionGuard({
  children,
  isUnderConstruction
}: {
  children: React.ReactNode;
  isUnderConstruction: boolean;
}) {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);

  useEffect(() => {
    const access = localStorage.getItem("site_access_granted");
    setHasAccess(access === "true");
  }, []);

  const handleLogin = (password: string) => {
    // Simple check for demonstration purposes. 
    // In a real scenario, this could be an API call or a more secure check.
    if (password === "podofisio2024") {
      localStorage.setItem("site_access_granted", "true");
      setHasAccess(true);
      return true;
    }
    return false;
  };

  // Wait for hydration/useEffect to avoid flashing
  if (hasAccess === null) return <div className="bg-[#131313] min-h-screen" />;

  if (isUnderConstruction && !hasAccess) {
    return <Maintenance onLogin={handleLogin} />;
  }

  return <>{children}</>;
}
