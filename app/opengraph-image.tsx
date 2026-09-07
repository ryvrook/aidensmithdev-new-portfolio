import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import { site } from '@/data/site';

export const dynamic = 'force-static';
export const alt = 'Aiden Smith — full-stack developer portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  const logo = await readFile(path.join(process.cwd(), 'public/brand/logo.png'));

  return new ImageResponse(
    (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%', padding: '56px 72px', background: '#0c0e10', color: '#edf2f4', fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 24, borderBottom: '1px solid #242c34', fontSize: 22 }}>
          <span>{site.name.toLowerCase()}</span>
          <span style={{ color: '#96a4ae' }}>work / about / contact</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 740 }}>
            <div style={{ color: '#91c985', fontSize: 20, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>Full-stack developer</div>
            <div style={{ display: 'flex', fontSize: 76, fontWeight: 700, letterSpacing: '-0.04em', marginBottom: 20 }}>Hi, I’m Aiden<span style={{ color: '#91c985' }}>.</span></div>
            <div style={{ fontSize: 30, lineHeight: 1.5, color: '#b1bdc4' }}>I build websites and apps, usually because I want to use them myself.</div>
          </div>
          {/* ImageResponse embeds the local logo without a network request. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`data:image/png;base64,${logo.toString('base64')}`} width={200} height={200} alt="" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 24, borderTop: '1px solid #242c34', fontSize: 22 }}>
          <span style={{ color: '#62a8b3' }}>Websites, apps, and experiments</span>
          <span style={{ color: '#91c985' }}>{new URL(site.url).hostname}</span>
        </div>
      </div>
    ),
    size,
  );
}
