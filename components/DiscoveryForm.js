"use client";

import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  botcheck: "",
};

export default function DiscoveryForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/discovery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setValues(initialValues);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  }

  if (status === "success") {
    return (
      <p className="form-status success" role="status">
        Thanks — we've received your request and will be in touch shortly.
      </p>
    );
  }

  return (
    <form className="discovery-form" onSubmit={handleSubmit} noValidate>
      <input
        type="checkbox"
        name="botcheck"
        checked={!!values.botcheck}
        onChange={(e) => setValues((prev) => ({ ...prev, botcheck: e.target.checked }))}
        className="hp-field"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required value={values.name} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required value={values.email} onChange={handleChange} />
        </div>
      </div>

      <div className="row">
        <div className="field">
          <label htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="company">Organization</label>
          <input id="company" name="company" type="text" value={values.company} onChange={handleChange} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">What does your organization need?</label>
        <textarea
          id="message"
          name="message"
          required
          value={values.message}
          onChange={handleChange}
          placeholder="Tell us a bit about the problem you're trying to solve..."
        />
      </div>

      <div className="submit-row">
        <button type="submit" className="cta-btn alt" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request a Discovery Session"}
        </button>
        <span className="form-note">We'll respond within one business day.</span>
      </div>

      {status === "error" && (
        <p className="form-status error" role="alert">{errorMessage}</p>
      )}
    </form>
  );
}
