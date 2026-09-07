import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site } from '@/data/site';

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Full-stack developer`,
    template: `%s | ${site.name}`,
  },
  description: site.bio,
  alternates: { types: { 'application/rss+xml': '/feed.xml' } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plexMono.className}>
      <body>
        <div className="mx-auto flex min-h-screen max-w-[920px] flex-col gap-9 px-6 pt-10 pb-24">
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Header />
          <main id="main-content" className="min-w-0 flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
