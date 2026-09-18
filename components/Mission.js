const programs = [
  "Software Development",
  "Cybersecurity",
  "Artificial Intelligence",
  "Cloud Computing",
  "Data Analytics",
  "Systems Analysis & Design",
  "UX/UI Design",
  "IT Project Management",
];

export default function Mission() {
  return (
    <section id="mission">
      <div className="wrap">
        <div className="section-head">
          <h2>Our Social Enterprise Mission</h2>
          <p>
            Creating Experience Through Real Work. One of the greatest barriers facing talented
            new technology graduates is the experience gap — employers want experienced
            candidates, and graduates need employment to gain that experience. SITP helps bridge
            that gap.
          </p>
        </div>

        <div className="stats-row">
          <div className="stat">
            <div className="num">120+</div>
            <div className="label">Emerging professionals worked with SITP as employees or contractors since 2014</div>
          </div>
          <div className="stat">
            <div className="num">$1.6M+</div>
            <div className="label">Industry revenue generated in SITP's first six years alone — without government operating subsidies</div>
          </div>
        </div>

        <p>Our professionals have come from programs including:</p>
        <div className="programs">
          {programs.map((program) => (
            <span key={program}>{program}</span>
          ))}
        </div>

        <div className="mission-close">
          <p>
            For many participants, SITP becomes the bridge between graduating from college and
            establishing a professional technology career in Canada.
          </p>
          <p className="emph">
            That's the social enterprise. We don't create simulated experience. We create real work.
          </p>
        </div>
      </div>
    </section>
  );
}
