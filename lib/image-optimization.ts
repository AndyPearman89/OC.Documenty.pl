/**
 * Image optimization utilities for Core Web Vitals
 */

export interface ImageSrcSet {
  src: string;
  srcSet: string;
  sizes: string;
}

export function generateResponsiveImage(
  imagePath: string,
  sizes: { w: number; h: number }[] = [
    { w: 320, h: 200 },
    { w: 640, h: 400 },
    { w: 960, h: 600 },
    { w: 1280, h: 800 },
  ],
): ImageSrcSet {
  const basePath = imagePath.replace(/\.[^.]+$/, "");
  const ext = imagePath.match(/\.[^.]+$/)?.[0] || ".jpg";

  return {
    src: imagePath,
    srcSet: sizes.map((size) => `${basePath}-${size.w}w${ext} ${size.w}w`).join(", "),
    sizes: "(max-width: 640px) 100vw, (max-width: 960px) 80vw, 90vw",
  };
}

export function getLazyLoadingProps(priority: "high" | "normal" | "low" = "normal") {
  return {
    loading: priority === "high" ? ("eager" as const) : ("lazy" as const),
    decoding: priority === "high" ? ("async" as const) : ("async" as const),
  };
}

export function getImageDimensions(aspectRatio: "16:9" | "4:3" | "1:1" | "3:2") {
  const ratios = {
    "16:9": { width: 1200, height: 675 },
    "4:3": { width: 1200, height: 900 },
    "1:1": { width: 1200, height: 1200 },
    "3:2": { width: 1200, height: 800 },
  };
  return ratios[aspectRatio];
}
