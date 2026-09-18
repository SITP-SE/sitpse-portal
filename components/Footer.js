import Image from "next/image";
import BookTrigger from "./BookTrigger";

export default function Footer() {
  return (
    <footer>
      <div className="stripe"></div>
      <div className="wrap footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-mark" role="img" aria-label="SITP Social Enterprise">
              <Image src="/sitp-logo-mark.png" alt="" fill sizes="160px" />
            </div>
            <p className="footer-tag">Skills. Innovation. Technology. Projects.</p>
          </div>
          <nav className="footer-links">
            <a href="#what-we-do">What We Do</a>
            <a href="#model">Our Model</a>
            <a href="#mission">Mission</a>
            <a href="#why">Why SITP</a>
            <BookTrigger className="footer-link-btn">Discovery Session</BookTrigger>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>SITP Social Enterprise</span>
          <span>Skills · Innovation · Technology · Projects</span>
        </div>
      </div>
    </footer>
  );
}
