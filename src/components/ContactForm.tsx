"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const fieldClass =
    "w-full rounded-2xl border border-sage-200 bg-cream/60 px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-sage-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sage-200";

  if (submitted) {
    return (
      <div className="rounded-xl2 border border-sage-100 bg-white/80 p-10 text-center shadow-card">
        <h3 className="text-2xl font-semibold text-sage-800">
          Thank you for reaching out
        </h3>
        <p className="mt-3 text-muted">
          We&apos;ve received your message and will get in touch at the shortest
          possible time to book your appointment. Here&apos;s to an ache-free
          life ahead.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-ghost mt-7"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl2 border border-sage-100 bg-white/80 p-7 shadow-card sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-sage-800">
            Full name
          </label>
          <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-sage-800">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={fieldClass}
            placeholder="(000) 000-0000"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-sage-800">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={fieldClass}
          placeholder="you@email.com"
        />
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-sage-800">
          How can we help? Share any specific health concerns.
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${fieldClass} resize-none`}
          placeholder="Tell us about your concerns and the therapy you're interested in..."
        />
      </div>

      <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
        Send Message
      </button>
    </form>
  );
}
