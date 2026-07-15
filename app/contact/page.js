'use client';

import { useState } from 'react';

const projectTypes = [
  'Residential Construction',
  'Outdoor Living & Recreation',
  'Ranch & Agricultural',
  'Commercial & Specialty',
  'Other / Not Sure Yet',
];

// Web3Forms — submissions are emailed to the connected account (steelemimi7@gmail.com).
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = 'c9f3bf02-0066-44e1-a007-cc344bae11d3';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New message from Ascent Construction website',
          ...form,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Sorry, something went wrong sending your message. Please call us at (559) 790-5400.');
      }
    } catch {
      setError('Sorry, something went wrong sending your message. Please call us at (559) 790-5400.');
    } finally {
      setSending(false);
    }
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
                      <label htmlFor="contact-name" className="font-display font-semibold text-xs uppercase tracking-widest text-muted block mb-2">
                        Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="contact-name"
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
                      <label htmlFor="contact-phone" className="font-display font-semibold text-xs uppercase tracking-widest text-muted block mb-2">
                        Phone <span className="text-accent">*</span>
                      </label>
                      <input
                        id="contact-phone"
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
                    <label htmlFor="contact-email" className="font-display font-semibold text-xs uppercase tracking-widest text-muted block mb-2">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-base border border-edge text-fore font-body text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-projectType" className="font-display font-semibold text-xs uppercase tracking-widest text-muted block mb-2">
                      Project Type
                    </label>
                    <select
                      id="contact-projectType"
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
                    <label htmlFor="contact-message" className="font-display font-semibold text-xs uppercase tracking-widest text-muted block mb-2">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-base border border-edge text-fore font-body text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Describe your project, location, timeline, and any other relevant details…"
                    />
                  </div>

                  <button type="submit" disabled={sending} className="btn-primary w-full text-center disabled:opacity-60 disabled:cursor-not-allowed">
                    {sending ? 'Sending…' : 'Send Message'}
                  </button>

                  {error && (
                    <p role="alert" className="font-body text-sm text-accent-light leading-relaxed">
                      {error}
                    </p>
                  )}

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
