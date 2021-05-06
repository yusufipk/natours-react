import logoLarge from "../images/logo-green-2x.png";
import logoSmall from "../images/logo-green-1x.png";
import logoGreenSmall from "../images/logo-green-small-1x.png";
import logoGreenLarge from "../images/logo-green-small-2x.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet={`${logoGreenSmall} 1x, ${logoGreenLarge} 2x`}
            media="(max-width: 37.5em)"
          />
          <img
            srcSet={`${logoSmall} 1x, ${logoLarge} 2x`}
            alt="Large logo"
            src={logoLarge}
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Design by Jonas Schmedtmann. Coded by{" "}
            <a
              href="https://github.com/yusufipk/natour"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Yusuf İpek
            </a>
            . You are allowed to use this webpage for personal and commercial
            use.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
