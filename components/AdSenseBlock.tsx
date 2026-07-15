"use client";

interface AdSenseBlockProps {
  slot: string;
  format?: "auto" | "rectangle" | "vertical" | "horizontal";
  className?: string;
}

export function AdSenseBlock({ slot, format = "auto", className = "" }: AdSenseBlockProps) {
  return (
    <div className={`adSenseBlock adSense-${format} ${className}`}>
      {/* AdSense script injection happens here via Next.js config */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
