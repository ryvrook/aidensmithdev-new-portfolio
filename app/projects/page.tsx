import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { statusColor, complexityBars } from '@/lib/format';

export const metadata: Metadata = { title: 'projects' };

export default function ProjectsPage() {
  const sorted = [...projects].sort(
    (a, b) =>
      Number(!!b.pinned) - Number(!!a.pinned) ||
      (a.pinnedOrder ?? Number.MAX_SAFE_INTEGER) -
        (b.pinnedOrder ?? Number.MAX_SAFE_INTEGER) ||
      b.updated.localeCompare(a.updated),
  );
  return (
    <div className="fade-up flex flex-col">
      <div className="mb-[10px] flex items-baseline justify-between gap-3">
        <div className="text-xs tracking-[.1em]" style={{ color: 'var(--text-dim)' }}>
          PROJECTS
        </div>
        <div className="text-xs" style={{ color: 'var(--text-faint)' }}>
          {projects.length} entries
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--line)' }}>
        {sorted.map((p) => {
          const bars = complexityBars(p.complexity);
          return (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className={`project-row row-hover relative block px-1 py-[15px] no-underline hover:no-underline ${p.image ? 'project-row-with-image sm:pr-[84px]' : ''}`}
              style={{ borderBottom: '1px solid var(--line-soft)', color: 'inherit' }}
            >
              {p.image && (
                <Image
                  src={p.image}
                  alt=""
                  width={64}
                  height={64}
                  className="project-row-image absolute top-[15px] right-1 size-16 object-contain"
                />
              )}
              <div className="project-row-meta flex flex-wrap items-baseline gap-3 text-xs">
                <span className="project-row-name text-base font-semibold" style={{ color: 'var(--text-bright)' }}>
                  {p.name}
                </span>
                {p.pinned && (
                  <span title="pinned" style={{ color: 'var(--amber)' }}>
                    ★
                  </span>
                )}
                <span style={{ color: statusColor[p.status] }}>{p.status}</span>
                <span style={{ color: 'var(--text-dim)' }}>{p.lang}</span>
                <span style={{ color: 'var(--text-dim)' }}>{p.updated}</span>
                <span className="project-complexity ml-auto" style={{ color: 'var(--text-dim)' }}>
                  complexity <span style={{ color: 'var(--amber)' }}>{bars.on}</span>
                  <span style={{ color: 'var(--bar-off)' }}>{bars.off}</span>
                </span>
              </div>
              <p className="mt-[7px] mb-0 text-base" style={{ color: 'var(--text-body)' }}>
                {p.summary}
              </p>
              <div className="mt-[6px] text-xs" style={{ color: 'var(--text-faint)' }}>
                → read log{p.repo ? ' · source ↗' : ' · private'}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
