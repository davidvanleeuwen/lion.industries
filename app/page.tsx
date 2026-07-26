import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "./site-chrome";

export const metadata: Metadata = {
  title: "Small software, built with care",
  description:
    "Lion Industries is David van Leeuwen’s independent company for useful apps, curious experiments, and occasional hardware.",
};

const principles = [
  {
    number: "01",
    title: "Useful before impressive.",
    body: "The point is to make something worth keeping, not another reason to clear a notification.",
  },
  {
    number: "02",
    title: "Private by default.",
    body: "Collect less, explain clearly, and leave people in control of what is theirs.",
  },
  {
    number: "03",
    title: "Small is a feature.",
    body: "Fewer moving parts, sharper decisions, and enough time to care about the edges.",
  },
];

export default function Home() {
  return (
    <SiteChrome active="home">
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span>Independent company</span>
              <span>The Netherlands</span>
            </p>
            <h1 id="hero-title">
              Small software.
              <br />
              <mark>Built with care.</mark>
            </h1>
            <p className="hero-intro">
              Lion Industries is David van Leeuwen&apos;s umbrella for useful
              apps, curious experiments, and the occasional piece of hardware.
            </p>
          </div>

          <aside className="hero-note" aria-label="A note about the company">
            <span className="note-rule" aria-hidden="true" />
            <p>
              The word <em>industries</em> is doing a little heavy lifting.
              For now, it is one person, one desk, and whatever is worth
              making.
            </p>
          </aside>
        </section>

        <section className="work-section" aria-labelledby="work-title">
          <div className="section-label" aria-hidden="true">
            <span>Current work</span>
            <span>001</span>
          </div>

          <div className="work-panel">
            <div className="work-copy">
              <div className="status-line">
                <span className="status-dot" aria-hidden="true" />
                In development
              </div>
              <h2 id="work-title">Something useful is taking shape.</h2>
              <p>
                A small iPhone app, made because it should exist. The name,
                story, and App Store link will appear here when it is ready.
              </p>
              <a
                className="text-link"
                href="mailto:davidvanleeuwen@pm.me?subject=Lion%20Industries%20beta"
              >
                Interested in testing? Say hello
                <span aria-hidden="true"> ↗</span>
              </a>
            </div>

            <dl className="status-table">
              <div>
                <dt>Platform</dt>
                <dd>iPhone</dd>
              </div>
              <div>
                <dt>Release</dt>
                <dd>When it is ready</dd>
              </div>
              <div>
                <dt>Made by</dt>
                <dd>David van Leeuwen</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="principles-section" aria-labelledby="principles-title">
          <div className="section-heading">
            <p className="eyebrow">How things get made</p>
            <h2 id="principles-title">A short operating manual.</h2>
          </div>

          <div className="principles-grid">
            {principles.map((principle) => (
              <article className="principle" key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="end-note" aria-labelledby="end-note-title">
          <p className="eyebrow">Lion Industries</p>
          <h2 id="end-note-title">
            A serious name
            <br />
            for side projects.
          </h2>
          <p>
            Need help with an app, want to test what is next, or just have a
            good question?
          </p>
          <div className="end-note-actions">
            <a
              className="button"
              href="mailto:davidvanleeuwen@pm.me?subject=Hello%20Lion%20Industries"
            >
              Email David
            </a>
            <Link className="text-link" href="/support/">
              Visit support <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
