"use client";

import { useState, type SubmitEvent } from "react";
import Link from "next/link";

export default function ScheduleAnAppointment({
  showForm = false,
}: {
  showForm?: boolean;
}) {
  const [formNotice, setFormNotice] = useState("");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormNotice(
      "No message was sent or saved. This form is a preview only.",
    );
  }

  return (
    <section
      id="contact"
      className="bg-paper-deep py-[clamp(4.5rem,8vw,8rem)]"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1240px]">
        <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(20rem,1.1fr)] items-start gap-12 border border-line bg-sage-soft p-[clamp(2rem,6vw,5rem)] text-ink max-md:grid-cols-1">
          <div>
            <p className="text-[0.72rem] font-medium uppercase leading-[1.6] tracking-[0.19em] text-clay-dark">
              Session options
            </p>
            <h2
              id="contact-heading"
              className="mt-3 max-w-[45rem] font-serif text-[clamp(2.4rem,5vw,4.45rem)] leading-[1.04]"
            >
              Choose a setting that feels workable.
            </h2>
            <p className="mt-4 max-w-[34rem] leading-[1.7] text-muted">
              Dr. Reynolds offers in-person therapy in Santa Monica and secure
              telehealth for clients located in California.
            </p>
            <address className="mt-5 text-sm not-italic leading-[1.7] text-muted">
              <strong className="font-medium text-ink">Office</strong>
              <br />
              123th Street 45 W, Santa Monica, CA 90401
            </address>
          </div>
          {showForm ? (
            <div className="border-l border-forest/30 pl-8 max-md:border-l-0 max-md:border-t max-md:pl-0 max-md:pt-6">
              <h3 className="font-serif text-[1.65rem]">Ask about session options</h3>
              <p className="mt-2 text-sm leading-[1.7] text-muted">
                Form preview only. Your information will not be sent or saved.
              </p>
              <form
                className="mt-5 grid gap-4"
                onSubmit={handleSubmit}
                aria-describedby="session-form-note"
              >
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <label className="grid gap-1.5 text-sm font-medium text-ink">
                    Name
                    <input
                      className="min-h-11 rounded-sm border border-line bg-paper px-3 text-base font-normal outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20"
                      name="name"
                      autoComplete="name"
                      required
                    />
                  </label>
                  <label className="grid gap-1.5 text-sm font-medium text-ink">
                    Email
                    <input
                      className="min-h-11 rounded-sm border border-line bg-paper px-3 text-base font-normal outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>
                <label className="grid gap-1.5 text-sm font-medium text-ink">
                  Preferred session format
                  <select
                    className="min-h-11 rounded-sm border border-line bg-paper px-3 text-base font-normal outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20"
                    name="session-format"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Choose an option
                    </option>
                    <option value="in-person">In person in Santa Monica</option>
                    <option value="telehealth">Telehealth in California</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </label>
                <button
                  className="mt-1 inline-flex min-h-[3.1rem] w-fit items-center justify-center rounded-full border border-forest bg-forest px-6 text-xs font-medium uppercase tracking-[0.12em] text-paper transition-colors hover:border-clay-dark hover:bg-clay-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest max-sm:w-full"
                  type="submit"
                >
                  Submit preview
                </button>
                <p
                  className="min-h-6 text-sm leading-[1.6] text-muted"
                  id="session-form-note"
                  aria-live="polite"
                >
                  {formNotice}
                </p>
              </form>
            </div>
          ) : (
            <div className="border-l border-forest/30 pl-8 max-md:border-l-0 max-md:border-t max-md:pl-0 max-md:pt-6">
              <h3 className="font-serif text-[1.65rem]">Ways to meet</h3>
              <p className="mt-3 leading-[1.7] text-muted">
                Meet in the private Santa Monica office, or connect through
                secure telehealth from within California.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex min-h-[3.1rem] items-center justify-center rounded-full border border-forest bg-forest px-6 text-xs font-medium uppercase tracking-[0.12em] text-paper transition-colors hover:border-clay-dark hover:bg-clay-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
              >
                Session options
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
