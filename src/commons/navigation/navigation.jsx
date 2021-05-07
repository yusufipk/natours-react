import React, { useState } from "react";
function Navigation() {
  const [check, setCheck] = useState(false);
  return (
    <div className="navigation">
      <input
        checked={check}
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label
        for="navi-toggle"
        className="navigation__button"
        onClick={() => setCheck(!check)}
      >
        <i className="fa fa-bars navigation__button--bars"></i>
        <i className="fa fa-times navigation__button--times"></i>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a
              href="#section-about"
              className="navigation__link"
              onClick={() => setCheck(!check)}
            >
              <span>1</span>
              About Natour
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#section-features"
              className="navigation__link"
              onClick={() => setCheck(!check)}
            >
              <span>2</span>
              Your Benefits
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#section-tours"
              className="navigation__link"
              onClick={() => setCheck(!check)}
            >
              <span>3</span>
              Popular Tours
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#section-stories"
              className="navigation__link"
              onClick={() => setCheck(!check)}
            >
              <span>4</span>
              Stories
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#section-book"
              className="navigation__link"
              onClick={() => setCheck(!check)}
            >
              <span>5</span>
              Book Now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
