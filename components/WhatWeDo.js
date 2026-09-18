const services = [
  {
    color: "c-blue",
    reversed: false,
    title: "Modern Websites & Digital Platforms",
    description:
      "Your website should do much more than provide information about your organization. SITP designs and implements professional, modern websites that can become an integral part of how your organization operates — whether that means a new site or transforming an existing one into a more powerful business platform.",
    bullets: [
      "Modern responsive website design",
      "E-commerce and online stores",
      "Stripe and other payment processing",
      "Online booking and scheduling",
      "Customer registration and accounts",
      "Event registration",
      "Membership systems",
      "Donations and fundraising",
      "CRM integration",
      "Automated email & communications",
      "Analytics and reporting",
      "Cloud hosting and deployment",
    ],
    tagline: "Don't just build a website. Build a better way to do business.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <line x1="4" y1="17" x2="44" y2="17" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="10" cy="12.5" r="1.6" fill="currentColor" />
        <circle cx="15" cy="12.5" r="1.6" fill="currentColor" />
        <line x1="11" y1="24" x2="34" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="11" y1="31" x2="26" y2="31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    color: "c-teal",
    reversed: true,
    title: "Artificial Intelligence & Automation",
    description:
      "AI has moved beyond experimentation. Organizations can now use it to automate everyday work, improve customer service, access organizational knowledge and dramatically increase productivity. We focus on practical AI — solutions designed around an identifiable business problem and measurable improvement, not technology for technology's sake.",
    bullets: [
      "AI-powered customer support",
      "Intelligent chatbots & virtual assistants",
      "Automated customer inquiries",
      "Internal knowledge assistants",
      "AI-powered search",
      "Document & information retrieval",
      "Workflow automation",
      "Automated content & communications",
      "Data extraction and classification",
      "AI integration with existing systems",
    ],
    tagline: "Find the repetitive work. Automate it. Improve it.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="12" cy="14" r="4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="36" cy="14" r="4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="24" cy="34" r="4" stroke="currentColor" strokeWidth="2.5" />
        <line x1="15.5" y1="16.5" x2="21" y2="31" stroke="currentColor" strokeWidth="2.5" />
        <line x1="32.5" y1="16.5" x2="27" y2="31" stroke="currentColor" strokeWidth="2.5" />
        <line x1="16" y1="14" x2="32" y2="14" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    color: "c-green",
    reversed: false,
    title: "Cybersecurity",
    description:
      "Cybersecurity is no longer just an IT issue. Every organization needs to understand its vulnerabilities, protect critical information and be prepared to respond when something goes wrong. We provide practical services built for small and mid-sized organizations that may not have extensive internal security resources — and where appropriate, we help implement the improvements we recommend.",
    bullets: [
      "Cybersecurity assessments & audits",
      "Vulnerability assessments",
      "Security policy & procedure reviews",
      "Cybersecurity awareness training",
      "Cloud & infrastructure security reviews",
      "Website & application security",
      "Data protection practices",
      "Cybersecurity readiness assessments",
      "Incident response planning",
      "Business continuity & cyber resilience",
      "Remediation planning & implementation",
    ],
    tagline: "Assess. Prioritize. Protect.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path
          d="M24 5 L41 11 V22 C41 33 34 40 24 43 C14 40 7 33 7 22 V11 Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M16 23 L21.5 28.5 L33 16"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    color: "c-blue",
    reversed: true,
    title: "Technology Projects",
    description:
      "Sometimes you know exactly what you need. Sometimes you simply know there must be a better way. SITP can assemble a project team around a specific business or technology challenge and take it from initial discovery through design, implementation and deployment.",
    bullets: [
      "Cloud migration",
      "Data migration",
      "Systems integration",
      "Software implementation",
      "Business process automation",
      "Data analytics & dashboards",
      "Infrastructure upgrades",
      "AI implementation",
      "Cybersecurity improvements",
      "Custom applications",
    ],
    tagline: "Discovery. Design. Implementation. Deployment.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="5" y="26" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <rect x="29" y="26" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <rect x="17" y="6" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2.5" />
        <line x1="24" y1="20" x2="24" y2="26" stroke="currentColor" strokeWidth="2.5" />
        <line x1="12" y1="22" x2="36" y2="22" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do">
      <div className="wrap">
        <div className="section-head">
          <h2>What We Do</h2>
          <p>Four practical areas, one goal: get a professional solution working quickly.</p>
        </div>

        {services.map((service) => (
          <div
            key={service.title}
            className={`service ${service.color}${service.reversed ? " rev" : ""}`}
          >
            <div className="icon-col">
              <span className="icon-chip">{service.icon}</span>
              <h3>{service.title}</h3>
            </div>
            <div className="text-col">
              <p>{service.description}</p>
              <ul className="bullets">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="tagline">{service.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
