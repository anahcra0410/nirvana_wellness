import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import Leaf from "@/components/Leaf";
import {
  disclaimerParagraphs,
  reservationPolicy,
  serviceGroups,
  site,
  treatmentCount,
} from "@/lib/site";

export const metadata: Metadata = {
  title: `Services & Pricing | ${site.name}`,
  description:
    "Explore Spa, Ayurvedic, Signature and Wellness Program therapies with current pricing — from Swedish and deep tissue massage to Shirodhara, Abhyanga, Marma, Cupping and more.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-sand/60">
        <div className="container-page relative py-24 text-center">
          <span className="eyebrow justify-center">
            <span className="rule" />
            Our Services
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-medium text-forest-900 sm:text-6xl text-balance">
            Therapies &amp; pricing
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
            Genuine Ayurvedic and spa therapies, tailored to your body.{" "}
            {treatmentCount} treatments across spa, Ayurvedic, signature and
            wellness programs. Sessions and durations can be customised —
            simply ask your therapist.
          </p>
        </div>
      </section>

      {serviceGroups.map((group) => (
        <section key={group.heading} className="container-page py-16">
          <Reveal>
            <div className="flex flex-col gap-4 border-b border-forest-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl font-medium text-forest-900 sm:text-4xl">
                  {group.heading}
                </h2>
                <p className="mt-3 text-muted">{group.blurb}</p>
              </div>
              <span className="text-[0.72rem] font-semibold uppercase tracking-luxe text-olive-600">
                {group.items.length}{" "}
                {group.items.length === 1 ? "treatment" : "treatments"}
              </span>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {group.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 80}>
                <article className="card flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-medium text-forest-900">
                      {item.title}
                    </h3>
                    <Leaf className="h-6 w-6 shrink-0 text-olive-500" />
                  </div>
                  <p className="mt-3 inline-flex w-fit border border-olive-500/40 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-olive-600">
                    {item.price}
                  </p>
                  {item.description ? (
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  ) : null}
                  {item.benefits ? (
                    <div className="mt-5">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-forest-800">
                        Benefits
                      </p>
                      <ul className="mt-3 space-y-2">
                        {item.benefits.map((b) => (
                          <li key={b} className="flex gap-3 text-sm text-muted">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive-500" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {item.includes ? (
                    <div className="mt-5">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-forest-800">
                        Therapies may include
                      </p>
                      <ul className="mt-3 space-y-2">
                        {item.includes.map((c) => (
                          <li key={c} className="flex gap-3 text-sm text-muted">
                            <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-olive-400" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {item.note ? (
                    <p className="mt-5 border-t border-forest-100 pt-4 text-xs leading-relaxed text-muted">
                      {item.note}
                    </p>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      ))}

      <section className="container-page pb-4">
        <p className="rounded-xl2 border border-sage-100 bg-sand/50 px-6 py-5 text-center text-sm text-muted">
          Some Ayurvedic therapies (such as Nasya and Vasti) are provided only
          after a consultation. Shirodhara, Swedana, Elakizhi, Navarakizhi and
          Shirovasti are generally combined with Abhyanga rather than offered
          as standalone services. Prices may vary with customised modalities.
          Applicable taxes will be added where required.
        </p>
      </section>

      <section className="bg-sand/60 py-20">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow">
              <span className="rule" />
              Reservations
            </span>
            <h2 className="mt-6 font-display text-4xl font-medium text-forest-900 sm:text-5xl">
              Reservation &amp; cancellation policy
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {reservationPolicy.map((section, i) => (
              <Reveal key={section.title} delay={(i % 2) * 80}>
                <article className="card h-full">
                  <h3 className="font-display text-2xl font-medium text-forest-900">
                    {section.title}
                  </h3>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <Reveal>
          <span className="eyebrow">
            <span className="rule" />
            Please read
          </span>
          <h2 className="mt-6 font-display text-4xl font-medium text-forest-900 sm:text-5xl">
            Disclaimer
          </h2>
        </Reveal>
        <div className="mt-10 space-y-4 text-sm leading-relaxed text-muted">
          {disclaimerParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
