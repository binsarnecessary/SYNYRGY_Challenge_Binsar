import React from "react";
import { Link } from "react-router-dom";
import kotakBiru from "../../assets/kotakbiru.png";
import sosmedFacebook from "../../assets/sosmed_facebook.png";
import sosmedInstagram from "../../assets/sosmed_instagram.png";
import sosmedTwitter from "../../assets/sosmed_twitter.png";
import sosmedWhatsapp from "../../assets/sosmed_whatsapp.png";
const Footer = () => {
  return (
    <>
      <section id="footer">
        <footer>
          <div className="container my-3">
            <div className="row">
              <div className="col-xl-5 col-md-6 col-sm-12">
                <ul className="list-unstyled">
                  <li>
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                  </li>
                  <li>
                    <p>binarcarrental@gmail.com</p>
                  </li>
                  <li>
                    <p>081-233-334-808</p>
                  </li>
                </ul>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-12">
                <ul className="list-unstyled listbawah">
                  <li>
                    <Link to="/#ourservice">Our services</Link>
                  </li>
                  <li>
                    <Link to="/#whyus">Why Us</Link>
                  </li>
                  <li>
                    <Link to="/#testimonial">Testimonial</Link>
                  </li>
                  <li>
                    <Link to="/#faq">FAQ</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-12 icon">
                <p>Contact Us :</p>
                <section>
                  <a href="https://facebook.com">
                    <img src={sosmedFacebook} alt="Facebook" />
                  </a>
                  <a href="https://www.instagram.com">
                    <img src={sosmedInstagram} alt="Facebook" />
                  </a>
                  <a href="https://twitter.com">
                    <img src={sosmedTwitter} alt="Facebook" />
                  </a>
                  <a href="https://web.whatsapp.com">
                    <img src={sosmedWhatsapp} alt="Facebook" />
                  </a>
                </section>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-12">
                <p>Copyright Binar 2022</p>
                <Link
                  to="/"
                  className="navbar-brand kotakbiru
            "
                >
                  <img src={kotakBiru} alt="" />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
