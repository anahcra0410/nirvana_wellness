import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import Leaf from "@/components/Leaf";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Nirvana Wellness Centre",
  description:
    "15 years of experience across Panchakarma, Swedish, deep tissue, reflexology, prenatal, hot stone, aromatherapy and more — with a personalised, client-centric approach.",
};

const techniques = [
  "Panchakarma treatment",
  "Swedish massage",
  "Deep Tissue massage",
  "Reflexology",
  "Prenatal & Geriatric massage",
  "Scalp & Hot Stone massage",
  "Aromatherapy",
  "Sports massage",
  "Trigger point therapy",
  "Medical massage",
  "Cranio-sacral therapy",
  "Customized oil-based therapy",
];

const values = [
  {
    title: "Therapeutic Massage",
    body: "Our therapists' rich experience and client-centric approach help us listen to each client's physical concerns, suggest the best Ayurvedic therapy, and respond intuitively to the body.",
  },
  {
    title: "Signature Sessions",
    body: "We focus on your concerns and recommend the best therapy — tailor-made according to the requirements of your specific condition.",
  },
  {
    title: "Personalised Care",
    body: "Clients return to us repeatedly for various ailments. Our personalised, professional approach and satisfying results earn us heartfelt referrals.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-sand/60">
        <div className="container-page relative py-24 text-center">
          <span className="eyebrow justify-center">
            <span className="rule" />
            About Us
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-medium text-forest-900 sm:text-6xl text-balance">
            A place to heal, restore and rebalance
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
            Welcome to {site.name}. Our therapists bring {site.experienceYears}{" "}
            years of experience across a wide range of Ayurvedic and spa
            techniques — supporting continuous success and rapid recovery from
            pain.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="container-page grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative h-[26rem] overflow-hidden rounded-xl2 bg-gradient-to-br from-sage-300 via-sage-500 to-sage-800 shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_75%_20%,rgba(255,255,255,0.25),transparent)]" />
            <p className="absolute right-8 top-8 max-w-[12rem] text-right font-display text-2xl leading-snug text-cream/90">
              Authentic therapy, intuitive touch
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            eyebrow="Our Story"
            title="Experience you can feel in every session"
            align="left"
          />
          <div className="mt-5 space-y-4 text-muted">
            <p>
              The massage therapists at {site.name} have {site.experienceYears}{" "}
              years of experience in different therapeutic techniques — from
              Panchakarma and Swedish massage to reflexology, prenatal,
              geriatric, hot stone, aromatherapy, trigger-point and medical
              massage, and care for fibromyalgia, MS and other chronic pain.
            </p>
            <p>
              We offer genuine Ayurvedic and spa therapies to help you maintain a
              healthy body and mind. Our therapists are trained in a variety of
              modalities and can offer a rich perspective on any health concern
              you bring to us.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Techniques */}
      <section className="bg-sand/50 py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Expertise"
            title="A breadth of healing techniques"
            subtitle="Years of training across these modalities allow us to address your concerns precisely and intuitively."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {techniques.map((t, i) => (
              <Reveal key={t} delay={i * 40}>
                <div className="flex items-center gap-3 rounded-2xl border border-forest-100 bg-white/70 px-4 py-3 text-sm font-medium text-forest-800">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-terracotta-400" />
                  {t}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Our Approach"
          title="Personalised, professional & intuitive"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 80}>
              <article className="card h-full">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-forest-100 text-forest-600">
                  <Leaf className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-sage-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {value.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
