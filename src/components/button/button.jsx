import "./button.css";

function Button(props) {
  return (
    <a
      href="#"
      className={
        props.animationName === "move-in-bottom"
          ? "btn btn-white move-in-bottom"
          : "btn btn-white"
      }
    >
      {props.text}
    </a>
  );
}

export default Button;
