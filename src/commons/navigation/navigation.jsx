function Navigation() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label for="navi-toggle" className="navigation__button">
        Menu
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="" className="navigation__link">
              <span>1</span>
              About Natour
            </a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">
              <span>2</span>
              Your Benefits
            </a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">
              <span>3</span>
              Popular Tours
            </a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">
              <span>4</span>
              Stories
            </a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">
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
