import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import Leaf from "@/components/Leaf";
import Faq from "@/components/Faq";
import { doshas, featuredServices, processSteps, reviews } from "@/lib/site";

const heroFeatures = [
  { label: "15 Years", sub: "Of hands-on experience" },
  { label: "Authentic Ayurveda", sub: "Time-honoured therapies" },
  { label: "Personalised", sub: "Tailored to your body" },
  { label: "20+ Modalities", sub: "A full spectrum of care" },
];

const holistic = [
  "Ayurvedic Therapy",
  "Spa & Bodywork",
  "Marma & Energy",
  "Herbal Steam",
  "Stress Relief",
  "Pain Recovery",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-900">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_78%_25%,rgba(120,126,96,0.55),transparent_60%),radial-gradient(60%_60%_at_10%_90%,rgba(132,127,79,0.28),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/50 to-transparent" />

        <div className="container-page relative flex min-h-[82vh] flex-col justify-center py-24">
          <div className="max-w-2xl animate-fade-up">
            <span className="eyebrow text-olive-300">
              <span className="rule bg-olive-300/70" />
              Authentic &middot; Personal &middot; Restorative
            </span>
            <h1 className="mt-7 font-display text-5xl font-medium leading-[1.03] text-cream sm:text-6xl lg:text-7xl text-balance">
              Ayurvedic wellness that changes your life
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/75">
              Personalised Ayurvedic and spa therapies that restore your body,
              mind and energy — with multiple layers of healing, in a calm and
              private setting.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book Your Consultation
              </Link>
              <Link
                href="/services"
                className="btn border border-cream/30 text-cream hover:bg-cream/10"
              >
                Explore Therapies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="border-b border-forest-100 bg-cream">
        <div className="container-page grid divide-y divide-forest-100 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-forest-100">
          {heroFeatures.map((f) => (
            <div key={f.label} className="flex items-center gap-4 px-2 py-7 lg:px-8">
              <Leaf className="h-7 w-7 shrink-0 text-olive-500" />
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-forest-900">
                  {f.label}
                </p>
                <p className="mt-1 text-sm text-muted">{f.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About / turning point */}
      <section className="container-page grid gap-14 py-24 lg:grid-cols-2 lg:items-center">
        <Reveal delay={80} className="order-2 lg:order-1">
          <span className="eyebrow">
            <span className="rule" />
            This isn&apos;t just a massage
          </span>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight text-forest-900 sm:text-5xl text-balance">
            This is your turning point
          </h2>
          <div className="mt-6 space-y-4 text-muted">
            <p>
              We offer genuine Ayurvedic and spa therapies to help you maintain a
              healthy body and a peaceful mind. Based on your concerns, we
              incorporate the right blend of modalities for your specific needs.
            </p>
            <p>
              Most of our clients return again and again thanks to a
              personalised, professional approach — and refer us to the people
              they love. Your well-being is where every session begins.
            </p>
          </div>
          <Link href="/about" className="btn-ghost mt-9">
            Discover Our Story
          </Link>
        </Reveal>

        <Reveal className="relative order-1 lg:order-2">
          <div className="relative aspect-[5/4] w-full overflow-hidden bg-gradient-to-br from-forest-400 via-forest-600 to-forest-900 shadow-soft blob">
            <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_75%_20%,rgba(255,255,255,0.18),transparent)]" />
            <p className="absolute right-8 top-8 max-w-[12rem] text-right font-display text-2xl italic leading-snug text-cream/85">
              A sanctuary for body &amp; mind
            </p>
          </div>
        </Reveal>
      </section>

      {/* Holistic approach */}
      <section className="bg-sand/70 py-24">
        <div className="container-page text-center">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="A holistic approach to total well-being"
            subtitle="Every element is personalised for you — because your path to balance is entirely your own."
          />
          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
            {holistic.map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <div className="flex flex-col items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-forest-200 text-olive-500">
                    <Leaf className="h-7 w-7" />
                  </span>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-forest-900">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-page py-24">
        <SectionHeading
          eyebrow="How it works"
          title="Your journey to balance"
          subtitle="Three considered steps, from your first hello to lasting relief."
        />
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 90}>
              <article className="border-t border-forest-200 pt-6">
                <span className="font-display text-5xl font-medium text-olive-400">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-2xl font-medium text-forest-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-forest-900 py-24 text-cream">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center text-olive-300">
              <span className="rule bg-olive-300/70" />
              Our Services
            </span>
            <h2 className="mt-5 font-display text-4xl font-medium sm:text-5xl text-balance">
              Unique therapies, different modalities
            </h2>
            <p className="mt-5 text-cream/70">
              Each session is tailored to your body. Explore some of our
              most-loved treatments.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service, i) => (
              <Reveal key={service.title} delay={i * 50}>
                <article className="h-full bg-forest-900 p-8 transition-colors duration-500 hover:bg-forest-800">
                  <Leaf className="h-7 w-7 text-olive-300" />
                  <h3 className="mt-5 font-display text-2xl font-medium text-cream">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/65">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link href="/services" className="btn-primary">
              View All Therapies &amp; Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Doshas */}
      <section className="container-page py-24">
        <SectionHeading
          eyebrow="Know your nature"
          title="The three doshas"
          subtitle="Ayurveda sees each of us as a unique blend of three energies. Understanding yours is the first step toward balance."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {doshas.map((dosha, i) => (
            <Reveal key={dosha.name} delay={i * 90}>
              <article className="card h-full">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-3xl font-medium text-forest-900">
                    {dosha.name}
                  </h3>
                  <Leaf className="h-8 w-8 text-olive-500" />
                </div>
                <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-olive-600">
                  {dosha.element}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  {dosha.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-sand/70 py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Kind words" title="What our clients say" />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={review.name} delay={i * 80}>
                <figure className="flex h-full flex-col border-t border-forest-200 pt-6">
                  <div className="text-olive-500" aria-hidden>
                    ★★★★★
                  </div>
                  <blockquote className="mt-5 font-display text-xl italic leading-relaxed text-forest-800">
                    “{review.body}”
                  </blockquote>
                  <figcaption className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-forest-900">
                    {review.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-24">
        <SectionHeading eyebrow="Good to know" title="Frequently asked questions" />
        <Faq />
      </section>

      <CTA />
    </>
  );
}
