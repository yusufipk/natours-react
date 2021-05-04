import logoLarge from "../images/logo-green-2x.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={logoLarge} alt="Large logo" className="footer__logo" />
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
            <a href="#" className="footer__link">
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
