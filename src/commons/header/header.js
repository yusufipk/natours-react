import "./header.css";
import logoWhite from "../../commons/images/logo-white.png";
import Button from "../../components/button/button";

function Header() {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={logoWhite} alt="Logo" className="logo"></img>
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happens</span>
        </h1>
        <Button animationName={"move-in-bottom"} text={"Discover our tours"} />
      </div>
    </header>
  );
}

export default Header;
