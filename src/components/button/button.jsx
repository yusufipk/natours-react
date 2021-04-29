import "./button.css";

function Button(props) {
  return (
    <a href="#" className="btn btn-white">
      {props.text}
    </a>
  );
}

export default Button;
