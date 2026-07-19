"use client";

import { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      setStatus({
        type: "error",
        message: "Please complete all fields before submitting.",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus({ type: "idle", message: "" });

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.error || "Unable to send enquiry right now.");
      }

      setStatus({
        type: "success",
        message: "Thanks, your enquiry has been sent.",
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to send enquiry right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="card grid gap-4 bg-white" onSubmit={handleSubmit}>
      <input
        className="rounded-xl border border-slate-200 p-4 outline-none transition focus:border-platinum"
        placeholder="First Name"
        name="firstName"
        value={form.firstName}
        onChange={updateField}
        autoComplete="given-name"
      />
      <input
        className="rounded-xl border border-slate-200 p-4 outline-none transition focus:border-platinum"
        placeholder="Last Name"
        name="lastName"
        value={form.lastName}
        onChange={updateField}
        autoComplete="family-name"
      />
      <input
        className="rounded-xl border border-slate-200 p-4 outline-none transition focus:border-platinum"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={updateField}
        autoComplete="email"
        type="email"
      />
      <textarea
        className="rounded-xl border border-slate-200 p-4 outline-none transition focus:border-platinum"
        rows="5"
        placeholder="How can we help?"
        name="message"
        value={form.message}
        onChange={updateField}
      />
      <button className="btn-primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit Enquiry"}
      </button>
      {status.type !== "idle" && (
        <p
          className={
            status.type === "success"
              ? "text-emerald-700 text-sm"
              : "text-red-700 text-sm"
          }
          role="status"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
