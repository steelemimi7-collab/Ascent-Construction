'use client';

import { useState } from 'react';

const projectTypes = [
  'Residential Construction',
  'Outdoor Living & Recreation',
  'Ranch & Agricultural',
  'Commercial & Specialty',
  'Other / Not Sure Yet',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up form submission (e.g. Resend, Formspree, custom API route)
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-base pt-32 pb-20 border-b border-edge overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="label mb-4">Get in Touch</p>
          <h1 className="font-display font-800 text-5xl md:text-7xl uppercase tracking-tightest text-fore leading-none max-w-3xl">
            Let&apos;s Talk About<br />
            <span className="text-accent">Your Project</span>
          </h1>
          <p className="font-body text-lg text-muted max-w-xl mt-6 leading-relaxed">
            Whether you have detailed plans or just an idea, we&apos;re happy to have a
            conversation. We work with each client to understand the property, the goals, the
            budget, and the timeline, before making any recommendations.
          </p>
        </div>
      </section>

      <section className="bg-surface border-b border-edge">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <p className="label mb-6">Direct Contact</p>
              <div className="space-y-8">
                <div>
                  <p className="font-display font-700 text-xs uppercase tracking-widest2 text-muted mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:5597905400"
                    className="font-display font-800 text-3xl text-fore hover:text-accent transition-colors"
                  >
                    (559) 790-5400
                  </a>
                </div>
                <div>
                  <p className="font-display font-700 text-xs uppercase tracking-widest2 text-muted mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:pat@ascentconstructiongroup.com"
                    className="font-display font-700 text-xl text-fore hover:text-accent transition-colors"
                  >
                    pat@ascentconstructiongroup.com
                  </a>
                </div>
                <div>
                  <p className="font-display font-700 text-xs uppercase tracking-widest2 text-muted mb-2">
                    Service Area
                  </p>
                  <p className="font-body text-base text-fore">
                    Primarily serving the Central Valley: Fresno, Clovis, Madera, Visalia, and
                    surrounding communities.
                  </p>
                </div>
                <div>
                  <p className="font-display font-700 text-xs uppercase tracking-widest2 text-muted mb-2">
                    License
                  </p>
                  <p className="font-body text-base text-fore">#1080865</p>
                </div>
              </div>

              <div className="mt-12 border-t border-edge pt-8">
                <p className="font-body text-sm text-muted italic leading-relaxed">
                  &ldquo;Reach out through any of the channels here, and we&apos;ll get back to you
                  as soon as possible. We work with homeowners, landowners, ranchers, and business
                  owners on projects big and small, from early ideas to finalized plans.&rdquo;
                </p>
                <p className="font-display font-700 text-xs uppercase tracking-widest text-fore/60 mt-4">
                  Patrick Steele, Founder
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <p className="label mb-6">Send a Message</p>

              {submitted ? (
                <div className="bg-accent/10 border border-accent/30 p-8">
                  <p className="font-display font-700 text-xl uppercase tracking-tight text-fore mb-2">
                    Message Sent
                  </p>
                  <p className="font-body text-sm text-muted">
                    Thank you, we&apos;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-display font-semibold text-xs uppercase tracking-widest text-muted block mb-2">
                        Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full bg-base border border-edge text-fore font-body text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="font-display font-semibold text-xs uppercase tracking-widest text-muted block mb-2">
                        Phone <span className="text-accent">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full bg-base border border-edge text-fore font-body text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                        placeholder="(559) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-display font-semibold text-xs uppercase tracking-widest text-muted block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-base border border-edge text-fore font-body text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="font-display font-semibold text-xs uppercase tracking-widest text-muted block mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full bg-base border border-edge text-fore font-body text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Select a category…</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-display font-semibold text-xs uppercase tracking-widest text-muted block mb-2">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-base border border-edge text-fore font-body text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Describe your project, location, timeline, and any other relevant details…"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full text-center">
                    Send Message
                  </button>

                  <p className="font-body text-xs text-muted/60 leading-relaxed">
                    We&apos;ll respond as soon as possible, usually within one business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
