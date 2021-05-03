function ButtonMain(props) {
  const { text, link, feature } = props;
  return (
    <a href="#" className={feature}>
      {text}
    </a>
  );
}

export default ButtonMain;
