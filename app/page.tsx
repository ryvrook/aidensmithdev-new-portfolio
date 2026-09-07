import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/data/site';
import { SeasonalBrand } from '@/components/SeasonalBrand';
import { getProject } from '@/data/projects';
import { statusColor } from '@/lib/format';

const selections = [
  { slug: 'roadrunner', focus: 'Web + mobile', description: 'A motorcycle ownership platform bringing maintenance, parts, guides, and a rider community into one place.', detail: 'Ownership records, community tools, and an iOS app in development.' },
  { slug: 'enterprise-vectordns', focus: 'Infrastructure', description: 'Domain monitoring built to distinguish real DNS, certificate, and WHOIS changes from noise.', detail: 'Go services, monitoring history, and account workflows.' },
  { slug: 'corvid-platform', focus: 'Connected products', description: 'One operator workspace connecting business discovery, website audits, leads, and site production.', detail: 'Shared workflows across independently running products.' },
  { slug: 'flock-directories', focus: 'Publishing systems', description: 'A shared template for independent local business directories, each built from validated, sourced data.', detail: 'One data model, reviewed listings, and a static site per domain.' },
  { slug: 'presentelle', focus: 'Current experiment', description: 'A visual thinking workspace connecting physical boards with session history, corrected records, and reviewed drafts.', detail: 'TypeScript and Swift. Provider and physical-device validation are still in progress.' },
];

export default function HomePage() {
  return (
    <div className="portfolio-home fade-up">
      <section className="intro" aria-labelledby="intro-title">
        <div>
          <p className="eyebrow">Full-stack developer</p>
          <h1 id="intro-title">Hi, I’m Aiden<span className="accent-dot">.</span></h1>
          <p className="intro-copy">I build websites and apps, usually because I want to use them myself.</p>
          <p className="intro-detail">Today that means tools for motorcycle owners, domain monitoring, and the systems that help small businesses get online.</p>
          <div className="intro-links">
            <Link href="#work" className="primary-link">Explore my work <span aria-hidden="true">↓</span></Link>
            <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <SeasonalBrand />
      </section>

      <section id="work" aria-labelledby="work-title">
        <div className="section-heading"><h2 id="work-title">Selected work</h2><Link href="/projects">All projects <span aria-hidden="true">↗</span></Link></div>
        <div className="selected-grid">
          {selections.map((selection, index) => {
            const project = getProject(selection.slug)!;
            return (
              <Link key={project.slug} href={`/projects/${project.slug}`} className={`project-card ${index === 0 ? 'project-card-lead' : ''}`}>
                {index === 0 && project.banner && <div className="project-capture"><Image src={project.banner} alt="Roadrunner website preview" width={1600} height={600} className="capture-image" sizes="(max-width: 720px) 100vw, 900px" /></div>}
                <div className="project-card-content">
                  <div className="project-card-meta"><span>{selection.focus}</span><span style={{ color: statusColor[project.status] }}>{project.status.toLowerCase()}</span></div>
                  <div className="project-card-title"><h3>{project.name}</h3>{project.image && <Image src={project.image} alt="" width={42} height={42} className="project-mark" />}</div>
                  <p>{selection.description}</p>
                  <p className="project-detail">{selection.detail}</p>
                  <span className="project-read">View project <span aria-hidden="true">↗</span></span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="about" className="about-section" aria-labelledby="about-title">
        <div><p className="eyebrow">About me</p><h2 id="about-title">I like figuring<br />things out.</h2></div>
        <div className="about-copy">
          <p>I’m self-taught, and building things has always been how I learn. What started with small websites for myself and my brothers has grown into a collection of tools, apps, and experiments that reflect whatever I’m curious about.</p>
          <p>My father introduced me to web development through <a href="https://github.com/ryvrook/OGRandomizr" target="_blank" rel="noreferrer">theRandomizr</a>, a website I built in 2012 to help my brothers and me choose a movie. It started with an unordered list and some vanilla JavaScript. I still return to that first project today as <a href="https://therandomizr.com" target="_blank" rel="noreferrer">Randomizr</a>.</p>
          <p>Outside of development, I ride motorcycles and play games with friends. Those interests sometimes find their way into my work, too. <Link href="/projects/roadrunner">Roadrunner</Link> is a project for fellow riders.</p>
        </div>
      </section>

      <section aria-labelledby="now-title">
        <div className="section-heading"><h2 id="now-title">On my desk</h2><span className="section-note">September 2026</span></div>
        <ul className="now-list">{site.now.map(item => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="contact-strip" aria-labelledby="contact-title">
        <div><h2 id="contact-title">Let’s talk.</h2><p>About a project, an interesting problem, or something I’ve built.</p></div>
        <Link href="/contact" className="primary-link">Get in touch <span aria-hidden="true">↗</span></Link>
      </section>
    </div>
  );
}
