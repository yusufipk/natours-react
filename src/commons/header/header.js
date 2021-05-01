import logoWhite from "../../commons/images/logo-white.png";
import Button from "../../components/button/button";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logoWhite} alt="Logo" className="header__logo"></img>
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>
        <Button animationName={"move-in--bottom"} text={"Discover our tours"} />
      </div>
    </header>
  );
}

export default Header;
