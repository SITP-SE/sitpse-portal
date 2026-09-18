const reasons = [
  {
    title: "Rapid",
    description:
      "We use modern platforms, cloud services, AI-assisted development and emerging technologies to move from idea to working solution quickly.",
  },
  {
    title: "Professional",
    description:
      "Projects are managed around defined requirements, deliverables, timelines and business outcomes.",
  },
  {
    title: "Practical",
    description: "We select technology appropriate to the problem rather than pursuing complexity for its own sake.",
  },
  {
    title: "Affordable",
    description:
      "Our social-enterprise delivery model provides access to talented technical resources without traditional consulting overhead.",
  },
  {
    title: "Innovative",
    description:
      "Our connection to emerging professionals means we work with people actively developing skills in the technologies reshaping the industry.",
  },
  {
    title: "Meaningful",
    description:
      "Every successful SITP project also creates professional experience and opportunity for the next generation of technology professionals.",
  },
];

export default function Why() {
  return (
    <section id="why" className="band">
      <div className="wrap">
        <div className="section-head">
          <h2>Why SITP?</h2>
          <p>
            Organizations don't necessarily need another consultant producing a report telling them
            what they should do. They need things implemented. SITP is built around execution.
          </p>
        </div>
        <div className="why-grid">
          {reasons.map((reason) => (
            <div className="why-item" key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
