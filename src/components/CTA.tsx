import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-forest-900 text-cream">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_20%,rgba(120,126,96,0.4),transparent_60%)]" />
      <div className="container-page relative py-24 text-center">
        <span className="eyebrow justify-center text-olive-300">
          <span className="rule bg-olive-300/70" />
          Begin your journey
        </span>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-medium leading-tight sm:text-5xl text-balance">
          Your new chapter of balance starts here
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-cream/70">
          Tell us about your concerns and we&apos;ll recommend the therapy
          tailored to your body and your needs — here&apos;s to an ache-free life
          ahead.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            Book Your Consultation
          </Link>
          <Link
            href="/services"
            className="btn border border-cream/30 text-cream hover:bg-cream/10"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
