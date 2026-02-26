"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

export default function HomePage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="page">
      <div className="card">
        <header className="card-header">
          <h1>Tell us about your project</h1>
          <p>
            Share a few details and we&apos;ll get back to you with ideas,
            pricing, and timelines.
          </p>
        </header>

        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Jane Doe"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="projectType">Project type</label>
              <select
                id="projectType"
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="website">Website design &amp; build</option>
                <option value="branding">Branding &amp; identity</option>
                <option value="product">Product UI/UX</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="budget">Estimated budget</label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                required
              >
                <option value="">Select a range</option>
                <option value="<2k">Under $2,000</option>
                <option value="2-5k">$2,000 – $5,000</option>
                <option value="5-10k">$5,000 – $10,000</option>
                <option value="10k+">$10,000+</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Project details</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Share goals, timelines, and anything else that helps."
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-button">
            Submit inquiry
          </button>

          {submitted && (
            <p className="success">
              Thanks for reaching out! We&apos;ll get back to you shortly.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
