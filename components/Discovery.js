import BookTrigger from "./BookTrigger";

const questions = [
  "Have an outdated website?",
  "Need to accept payments or bookings online?",
  "Wondering how AI could automate part of your operation?",
  "Concerned about cybersecurity?",
  "Have a technology project that never seems to get started?",
];

export default function Discovery() {
  return (
    <section id="discovery">
      <div className="wrap discovery">
        <div>
          <div className="section-head" style={{ marginBottom: 28 }}>
            <h2>Start With a Discovery Session</h2>
          </div>
          <ul className="qlist">
            {questions.map((question) => (
              <li key={question}>
                <span className="qbar"></span>
                {question}
              </li>
            ))}
          </ul>
        </div>
        <div className="discovery-close">
          <p>
            Tell us the problem. We'll help you determine what can be done, what technology makes
            sense, and how SITP can get it implemented.
          </p>
          <BookTrigger className="cta-btn alt">Request a Discovery Session</BookTrigger>
        </div>
      </div>
    </section>
  );
}
