import "./button.css";

function Button(props) {
  const { text, animationName, link } = props;
  return (
    <a
      href="#"
      className={
        animationName === "move-in-bottom"
          ? "btn btn-white move-in-bottom"
          : "btn btn-white"
      }
    >
      {text}
    </a>
  );
}

export default Button;
