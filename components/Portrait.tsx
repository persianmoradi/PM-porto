"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/content/site";

const PLACEHOLDER = "/portrait-placeholder.svg";

export function Portrait({
  sizes,
  // Tailwind object-position class. Controls which part of a tall photo stays
  // in frame so the hair/top of the head isn't cropped.
  position = "object-center",
}: {
  sizes: string;
  position?: string;
}) {
  const [src, setSrc] = useState(site.portrait);

  return (
    <Image
      src={src}
      alt={`Portrait of ${site.name}`}
      fill
      sizes={sizes}
      className={`object-cover ${position}`}
      unoptimized={src.endsWith(".svg")}
      onError={() => setSrc(PLACEHOLDER)}
    />
  );
}
