import Link from "next/link";
import type { ReactNode } from "react";

type ActivePage = "home" | "support" | "privacy";

const navigation: Array<{ href: string; label: string; id: ActivePage }> = [
  { href: "/", label: "Home", id: "home" },
  { href: "/support/", label: "Support", id: "support" },
  { href: "/privacy/", label: "Privacy", id: "privacy" },
];

export function SiteChrome({
  active,
  children,
}: {
  active: ActivePage;
  children: ReactNode;
}) {
  return (
    <div className="site-frame">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <Link className="brand" href="/" aria-label="Lion Industries, home">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
          </span>
          <span className="brand-name">
            Lion
            <br />
            Industries
          </span>
        </Link>

        <nav aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              aria-current={active === item.id ? "page" : undefined}
              href={item.href}
              key={item.id}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {children}

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Lion Industries</p>
        <p>
          Made by{" "}
          <a href="https://davidvanleeuwen.nl">David van Leeuwen</a>
        </p>
        <p className="footer-status">
          <span className="status-dot" aria-hidden="true" />
          Quietly operational
        </p>
      </footer>
    </div>
  );
}
