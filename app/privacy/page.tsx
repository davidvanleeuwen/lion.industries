import type { Metadata } from "next";
import { SiteChrome } from "../site-chrome";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "The plain-language privacy policy for Lion Industries and its website.",
};

export default function PrivacyPage() {
  return (
    <SiteChrome active="privacy">
      <main className="subpage policy-page" id="main-content">
        <header className="subpage-header">
          <p className="eyebrow">Privacy / Plain language</p>
          <h1>Collect less.<br />Explain clearly.</h1>
          <p>
            This website does not use analytics, advertising, tracking pixels,
            or cookies. There are no accounts and no forms.
          </p>
        </header>

        <div className="policy-layout">
          <aside>
            <p>Last updated</p>
            <strong>26 July 2026</strong>
            <p>Applies to</p>
            <strong>lion.industries</strong>
          </aside>

          <article className="policy-copy">
            <section>
              <h2>01 / This website</h2>
              <p>
                Lion Industries does not collect personal information through
                this website. If you email us, your message and email address
                are used only to answer you and to follow up on the reason you
                got in touch.
              </p>
              <p>
                The company that hosts this website may process standard
                technical request information, such as an IP address, to
                deliver the site securely and keep it working.
              </p>
            </section>

            <section>
              <h2>02 / Lion Industries apps</h2>
              <p>
                Apps are designed to collect as little information as
                possible. The exact data practices for each released app will
                be stated here and in its App Store listing before you use it.
                The first Lion Industries app is still in development, so its
                final, product-specific disclosure is not yet published.
              </p>
              <p>
                Lion Industries does not sell personal information and does
                not use cross-app advertising trackers.
              </p>
            </section>

            <section>
              <h2>03 / Your choices</h2>
              <p>
                You can ask what information is held about an email or support
                request, or ask for it to be corrected or deleted. Send the
                request from the same email address so ownership can be
                verified.
              </p>
            </section>

            <section>
              <h2>04 / Contact</h2>
              <p>
                Questions about privacy can go directly to David at{" "}
                <a href="mailto:davidvanleeuwen@pm.me?subject=Lion%20Industries%20privacy">
                  davidvanleeuwen@pm.me
                </a>
                .
              </p>
            </section>
          </article>
        </div>
      </main>
    </SiteChrome>
  );
}
