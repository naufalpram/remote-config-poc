"use client"
import { getConfigValue } from "@/lib/firebase";
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react";

export default function PromoMarquee({ className, repeat = 4 }) {
  const [promoText, setPromoText] = useState(null);

  useEffect(() => {
    const promoTextConfig = getConfigValue('promo_banner_text').asString();
    setPromoText(promoTextConfig ?? null);
  }, []);

  // Create repeated text
  const repeatedText = promoText && promoText !== '' ? Array(repeat).fill(promoText).join(" • ") : null;

  return repeatedText && (
    <div className={cn("relative overflow-hidden whitespace-nowrap bg-primary/5", className)}>
      <div className="inline-block animate-marquee">
        {repeatedText}
      </div>
      <div className="sr-only">{promoText}</div>
    </div>
  )
}

