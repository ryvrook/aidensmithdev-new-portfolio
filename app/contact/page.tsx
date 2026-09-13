import type { Metadata } from 'next';
import { site } from '@/data/site';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <div className="contact-page fade-up">
      <p className="eyebrow">Contact</p>
      <h1>Let’s talk.</h1>
      <p>Have a project in mind, a question about my work, or a problem worth exploring? You can find me here.</p>
      <div className="contact-options">
        {site.email && <a href={`mailto:${site.email}`}><span>Email</span><span>{site.email} ↗</span></a>}
        <a href={site.linkedin} target="_blank" rel="noreferrer" className="no-arrow"><span>LinkedIn</span><span>Aiden Smith ↗</span></a>
        <a href={site.github} target="_blank" rel="noreferrer" className="no-arrow contact-github"><span>GitHub</span><span>@ryvrook ↗</span></a>
        <a href={site.resume} target="_blank" rel="noreferrer" className="no-arrow"><span>Resume</span><span>PDF ↗</span></a>
      </div>
      <p className="contact-secondary">For the wider collection of experiments and development notes, visit <a href="https://ryvrook.com" target="_blank" rel="noreferrer">ryvrook.com</a>.</p>
    </div>
  );
}
