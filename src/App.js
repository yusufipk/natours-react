import "./App.scss";
import About from "./commons/about-section/about";
import Feature from "./commons/feature-section/feature";
import Header from "./commons/header/header.jsx";
import Tours from "./commons/tours-section/tours";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Feature />
      <Tours />
    </div>
  );
}

export default App;
