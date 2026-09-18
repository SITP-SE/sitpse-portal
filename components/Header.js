import Image from "next/image";
import BookTrigger from "./BookTrigger";

export default function Header() {
  return (
    <header>
      <div className="stripe"></div>
      <div className="header-row">
        <a className="brand" href="#top" aria-label="SITP Social Enterprise — home">
          <div className="brand-mark" role="img" aria-label="SITP Social Enterprise">
            <Image src="/sitp-logo-mark.png" alt="" fill priority sizes="190px" />
          </div>
        </a>
        <nav className="links">
          <a href="#what-we-do">What We Do</a>
          <a href="#model">Our Model</a>
          <a href="#mission">Mission</a>
          <a href="#why">Why SITP</a>
        </nav>
        <BookTrigger className="cta-btn">
          <span className="full">Book a Discovery Session</span>
          <span className="short">Book Now</span>
        </BookTrigger>
      </div>
    </header>
  );
}
