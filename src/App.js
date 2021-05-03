import "./App.scss";
import About from "./commons/about-section/about";
import Booking from "./commons/booking-section/booking";
import Feature from "./commons/feature-section/feature";
import Header from "./commons/header/header.jsx";
import Stories from "./commons/stories-section/stories";
import Tours from "./commons/tours-section/tours";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Feature />
      <Tours />
      <Stories />
      <Booking />
    </div>
  );
}

export default App;
