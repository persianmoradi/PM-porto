"use client";

import dynamic from "next/dynamic";
import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

// WebGL is client-only and heavy: keep three.js out of the server render and
// out of the critical bundle. The page is fully usable before (or without) it.
const Sculpture = dynamic(() => import("@/components/Sculpture"), {
  ssr: false,
});

/** Fixed 3D layer behind every page, plus inertial scrolling. */
export function Backdrop() {
  const [smooth, setSmooth] = useState(false);

  useEffect(() => {
    setSmooth(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <>
      {smooth && <ReactLenis root options={{ anchors: true, lerp: 0.1 }} />}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <Sculpture />
        <div className="grain absolute inset-0" />
      </div>
    </>
  );
}
