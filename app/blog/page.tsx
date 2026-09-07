import type { Metadata } from 'next';
import Link from 'next/link';
import { getPosts } from '@/lib/posts';
import { formatTags } from '@/lib/format';
import { site } from '@/data/site';

export const metadata: Metadata = { title: 'Writing' };

export default function BlogPage() {
  const posts = getPosts();
  return (
    <div className="fade-up flex flex-col">
      <div className="mb-[10px] flex items-baseline justify-between gap-3">
        <div className="text-xs tracking-[.1em]" style={{ color: 'var(--text-dim)' }}>
          WRITING
        </div>
        <div className="text-xs">
          <a href="/feed.xml" className="quiet-link">
            rss
          </a>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--line)' }}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="row-hover grid grid-cols-[92px_1fr_52px] items-baseline gap-[14px] px-1 py-[14px] no-underline hover:no-underline"
            style={{ borderBottom: '1px solid var(--line-soft)', color: 'inherit' }}
          >
            <span className="text-xs" style={{ color: 'var(--text-dim)' }}>
              {post.date}
            </span>
            <span>
              <span className="font-medium" style={{ color: '#c6d0d6' }}>
                {post.title}
              </span>
              <br />
              <span className="text-sm" style={{ color: 'var(--text-mid)' }}>
                {post.blurb}
              </span>
              <br />
              <span className="text-xs" style={{ color: 'var(--text-faint)' }}>
                {formatTags(post.tags)}
              </span>
            </span>
            <span className="text-right text-xs" style={{ color: 'var(--text-dim)' }}>
              {post.minutes} min
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-3 text-xs" style={{ color: 'var(--text-faint)' }}>
        {posts.length} entries. No comments section, just{' '}
        <a href={site.email ? `mailto:${site.email}` : site.linkedin} className="quiet-link">
          get in touch
        </a>
        .
      </div>
    </div>
  );
}
