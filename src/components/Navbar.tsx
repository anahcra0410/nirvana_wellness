"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* Slim tagline bar */}
      <div className="bg-forest-900 py-2 text-center">
        <p className="text-[0.62rem] font-medium uppercase tracking-luxe text-cream/70">
          Restore &middot; Balance &middot; Renew
        </p>
      </div>

      {/* Main bar */}
      <div className="border-b border-forest-100 bg-cream/95 backdrop-blur">
        <nav className="container-page flex items-center justify-between py-5">
          <Link href="/" aria-label="Nirvana Wellness Centre — home" className="leading-none">
            <Image
              src="/nirvana-logo.png"
              alt="Nirvana Wellness Centre"
              width={220}
              height={220}
              priority
              className="h-16 w-auto sm:h-20"
            />
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`link-underline text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-colors ${
                    active
                      ? "text-forest-900 after:w-full"
                      : "text-muted hover:text-forest-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <Link href="/contact" className="hidden btn-primary lg:inline-flex">
            Book a Call
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center border border-forest-200 text-forest-800 lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-current transition-all ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-5 bg-current transition-all ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-px w-5 bg-current transition-all ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>

        <div
          className={`overflow-hidden border-t border-forest-100 bg-cream transition-all duration-300 lg:hidden ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="container-page flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-1 py-3 text-[0.75rem] font-medium uppercase tracking-[0.22em] transition-colors ${
                  pathname === link.href
                    ? "text-forest-900"
                    : "text-muted hover:text-forest-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-3 w-full">
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
