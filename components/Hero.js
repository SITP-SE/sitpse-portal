import Image from "next/image";
import BookTrigger from "./BookTrigger";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <h1>Modern Technology. Rapidly Implemented.</h1>
          <p className="lede">
            SITP helps organizations rapidly adopt and implement modern technology — combining
            experienced technology and project leadership with talented emerging professionals to
            deliver practical, affordable solutions in web development, e-commerce, business
            automation, cybersecurity and artificial intelligence.
          </p>
          <p className="lede2">
            Our focus is straightforward: understand the business problem, identify the right
            technology, and get a professional solution working quickly.
          </p>
          <div className="cta-row">
            <BookTrigger className="cta-btn">Book a Discovery Session</BookTrigger>
            <a className="see-link" href="#what-we-do">See what we do</a>
          </div>
        </div>
        <div className="hero-mark">
          <div
            className="hero-logo"
            role="img"
            aria-label="SITP Social Enterprise — Skills, Innovation, Technology, Projects"
          >
            <Image src="/sitp-logo-full.png" alt="" fill priority sizes="440px" />
          </div>
        </div>
      </div>
    </section>
  );
}
