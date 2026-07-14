"use client";

import Script from "next/script";

type AdsenseProps = {
  client?: string;
  slot: string;
  className?: string;
  label?: string;
};

export function AdsenseScript({ client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT, slot, className, label }: AdsenseProps) {
  if (!client) return null;

  return (
    <div className={className}>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ins
        className="adsbygoogle"
        style={{ display: "block", minHeight: 90 }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
        aria-label={label ?? "Reklama"}
      />
      <Script id={`adsense-init-${slot}`} strategy="afterInteractive">
        {`(window.adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </div>
  );
}
