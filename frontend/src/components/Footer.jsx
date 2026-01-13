
const Footer = () => {
  return (
    <>
      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-overlay">
          <div className="cta-content">
            <h3>
              Learn more about our listing process, as well as our
              additional staging and design work.
            </h3>
            <button className="cta-btn">LEARN MORE</button>
          </div>
        </div>
      </section>

      {/* FOOTER TOP (BLUE STRIP) */}
      <div className="footer-top">
        <div className="container footer-top-inner">
          <ul className="footer-links">
            <li>Home</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>

          <div className="newsletter">
            <span>Subscribe Us</span>
            <input type="email" placeholder="Enter Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <footer className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© Real Trust 2023</p>

          <div className="social-icons">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
