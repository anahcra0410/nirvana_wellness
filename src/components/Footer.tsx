import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-forest-900 text-cream">
      <div className="container-page grid gap-12 py-20 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-semibold uppercase tracking-[0.35em] text-cream">
            Nirvana
          </p>
          <p className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.4em] text-olive-300">
            Wellness Centre
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">
            Genuine Ayurvedic and spa therapies to help you maintain a healthy
            body and a peaceful mind. We look forward to an ache-free life
            together after your therapy.
          </p>
          <div className="mt-7 flex gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center border border-cream/20 text-cream/70 transition-colors hover:border-olive-300 hover:text-cream"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center border border-cream/20 text-cream/70 transition-colors hover:border-olive-300 hover:text-cream"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H8v2.8h2.2V21h3.3Z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[0.7rem] font-semibold uppercase tracking-luxe text-olive-300">
            Explore
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-cream/70 transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[0.7rem] font-semibold uppercase tracking-luxe text-olive-300">
            Get in touch
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            <li>
              <a className="transition-colors hover:text-cream" href={`tel:${site.phone}`}>
                {site.phone}
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-cream"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-[0.7rem] uppercase tracking-[0.18em] text-cream/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Restore &middot; Balance &middot; Renew</p>
        </div>
      </div>
    </footer>
  );
}
