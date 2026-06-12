"use client";

import { useEffect, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (isHomePage) return;

    setVisible(false);

    const id = requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => cancelAnimationFrame(id);
  }, [pathname, isHomePage]);

  if (isHomePage) return <>{children}</>;

  return (
    <div
      className="will-change-transform transition-[opacity,transform,filter] duration-700"
      style={{
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        filter: visible ? "blur(0px)" : "blur(6px)",
      }}
    >
      {children}
    </div>
  );
}