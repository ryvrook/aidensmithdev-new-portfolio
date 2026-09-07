'use client';

import Image from 'next/image';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

const PrideContext = createContext(false);

export function SeasonalBrandProvider({ children }: { children: ReactNode }) {
  // Match the static HTML on first render, then use the visitor's local date.
  const [pride, setPride] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function update() {
      clearTimeout(timer);
      const now = new Date();
      const preview = process.env.NODE_ENV === 'development'
        && new URLSearchParams(window.location.search).get('pride') === '1';
      const isJune = preview || now.getMonth() === 5;
      setPride(isJune);

      const icon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
      if (icon) {
        icon.href = isJune ? '/brand/logo-pride.gif' : '/favicon.ico';
        icon.type = isJune ? 'image/gif' : 'image/x-icon';
      }

      // Switch at midnight even if the page stays open across month boundaries.
      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      timer = setTimeout(update, tomorrow.getTime() - now.getTime() + 100);
    }

    update();
    window.addEventListener('focus', update);
    document.addEventListener('visibilitychange', update);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('focus', update);
      document.removeEventListener('visibilitychange', update);
    };
  }, []);

  return <PrideContext.Provider value={pride}>{children}</PrideContext.Provider>;
}

export function SeasonalBrand() {
  const pride = useContext(PrideContext);

  return (
    <picture className="brand-mark portrait">
      <source media="(prefers-reduced-motion: reduce)" srcSet="/brand/logo.png" />
      <Image
        src={pride ? '/brand/logo-pride.gif' : '/brand/logo.png'}
        alt="Aiden Smith’s hummingbird logo"
        width={160}
        height={160}
        priority
      />
    </picture>
  );
}
