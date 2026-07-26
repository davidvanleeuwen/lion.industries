import type { Metadata } from "next";
import { SiteChrome } from "../site-chrome";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Help and contact information for apps made by Lion Industries.",
};

export default function SupportPage() {
  return (
    <SiteChrome active="support">
      <main className="subpage" id="main-content">
        <header className="subpage-header">
          <p className="eyebrow">Support / 001</p>
          <h1>Need a hand?</h1>
          <p>
            Lion Industries is a one-person operation. There is no ticket
            maze: your email goes straight to David.
          </p>
        </header>

        <section className="support-card" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Tell me what went wrong.</h2>
          </div>
          <div className="support-card-copy">
            <p>
              Include the app name, what you were trying to do, what happened
              instead, and your iPhone and iOS version. A screenshot is useful
              when it does not contain private information.
            </p>
            <a
              className="button"
              href="mailto:david@lion.industries?subject=Lion%20Industries%20support"
            >
              Email support
            </a>
            <p className="fine-print">david@lion.industries</p>
          </div>
        </section>

        <section className="checklist" aria-labelledby="checklist-title">
          <div className="section-heading">
            <p className="eyebrow">Before writing</p>
            <h2 id="checklist-title">Three quick checks.</h2>
          </div>
          <ol>
            <li>
              <span>01</span>
              Update the app to the latest available version.
            </li>
            <li>
              <span>02</span>
              Close and reopen the app, then try the same action once.
            </li>
            <li>
              <span>03</span>
              Note the exact wording of any error message.
            </li>
          </ol>
        </section>

        <section className="response-note">
          <p className="eyebrow">Response time</p>
          <p>
            I read every useful report and reply as soon as I reasonably can.
            Lion Industries is not a 24/7 support desk, which is both the charm
            and the limitation.
          </p>
        </section>
      </main>
    </SiteChrome>
  );
}
