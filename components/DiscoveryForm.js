"use client";

import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  orgInfo: "",
  issues: "",
  botcheck: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9()\-\s]{7,20}$/;

function validateField(name, value) {
  switch (name) {
    case "name":
      return value.trim() ? "" : "Please enter your name.";
    case "email":
      if (!value.trim()) return "Please enter your email.";
      return EMAIL_PATTERN.test(value.trim()) ? "" : "Please enter a valid email address.";
    case "phone":
      if (!value.trim()) return "";
      return PHONE_PATTERN.test(value.trim()) ? "" : "Please enter a valid phone number.";
    case "orgInfo":
      return value.trim() ? "" : "Tell us a bit about your organization.";
    case "issues":
      return value.trim() ? "" : "Let us know what issue you'd like help with.";
    default:
      return "";
  }
}

function validateAll(values) {
  const errors = {};
  for (const field of ["name", "email", "phone", "orgInfo", "issues"]) {
    const error = validateField(field, values[field]);
    if (error) errors[field] = error;
  }
  return errors;
}

export default function DiscoveryForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      return { ...prev, [name]: validateField(name, value) };
    });
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateAll(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

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
      setErrors({});
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
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={errors.name ? "invalid" : ""}
          />
          {errors.name && (
            <p className="field-error" id="name-error" role="alert">{errors.name}</p>
          )}
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={errors.email ? "invalid" : ""}
          />
          {errors.email && (
            <p className="field-error" id="email-error" role="alert">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="row">
        <div className="field">
          <label htmlFor="phone">Phone (optional)</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={errors.phone ? "invalid" : ""}
          />
          {errors.phone && (
            <p className="field-error" id="phone-error" role="alert">{errors.phone}</p>
          )}
        </div>
        <div className="field">
          <label htmlFor="company">Organization</label>
          <input id="company" name="company" type="text" value={values.company} onChange={handleChange} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="orgInfo">Tell us about your organization</label>
        <p className="field-hint">What do you do, and roughly how big is your team?</p>
        <textarea
          id="orgInfo"
          name="orgInfo"
          required
          value={values.orgInfo}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="A short description of your organization..."
          aria-invalid={!!errors.orgInfo}
          aria-describedby={errors.orgInfo ? "orgInfo-error" : undefined}
          className={errors.orgInfo ? "invalid" : ""}
        />
        {errors.orgInfo && (
          <p className="field-error" id="orgInfo-error" role="alert">{errors.orgInfo}</p>
        )}
      </div>

      <div className="field">
        <label htmlFor="issues">What issues can we help you solve?</label>
        <p className="field-hint">Tell us about the problem you're trying to solve.</p>
        <textarea
          id="issues"
          name="issues"
          required
          value={values.issues}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Outdated website, manual processes, security concerns..."
          aria-invalid={!!errors.issues}
          aria-describedby={errors.issues ? "issues-error" : undefined}
          className={errors.issues ? "invalid" : ""}
        />
        {errors.issues && (
          <p className="field-error" id="issues-error" role="alert">{errors.issues}</p>
        )}
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
