import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Nirvana Wellness Centre",
  description:
    "Get in touch to book your appointment. Call, text or email us with your contact details and specific health concerns and we'll respond as soon as possible.",
};

const contactItems = [
  {
    label: "Phone & Text",
    value: site.phone,
    href: `tel:${site.phone}`,
    note: "Call or leave a text message",
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Share your concerns in detail",
  },
  {
    label: "Appointments",
    value: site.location,
    href: undefined,
    note: "We'll confirm a time that suits you",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-sand/60">
        <div className="container-page relative py-24 text-center">
          <span className="eyebrow justify-center">
            <span className="rule" />
            Contact Us
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-medium text-forest-900 sm:text-6xl text-balance">
            Get in touch
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
            Contact us by phone or text, or email us with your contact details
            and specific health concerns. We&apos;ll get in touch at the shortest
            possible time to book your appointment — here&apos;s to an ache-free
            life after your therapy.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-5">
          {contactItems.map((item) => (
            <div key={item.label} className="card">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-500">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-2 block font-display text-2xl font-semibold text-sage-800 transition-colors hover:text-sage-600"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 font-display text-2xl font-semibold text-sage-800">
                  {item.value}
                </p>
              )}
              <p className="mt-1 text-sm text-muted">{item.note}</p>
            </div>
          ))}

          <div className="rounded-xl2 bg-forest-800 p-7 text-cream shadow-soft">
            <p className="font-display text-xl italic leading-snug text-balance">
              “May your inner soul shine bright and bloom like a lotus.”
            </p>
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
