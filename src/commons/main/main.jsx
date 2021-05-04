import About from "../about-section/about";
import Booking from "../booking-section/booking";
import Feature from "../feature-section/feature";
import Stories from "../stories-section/stories";
import Tours from "../tours-section/tours";

function Main() {
  return (
    <main>
      <About />
      <Feature />
      <Tours />
      <Stories />
      <Booking />
    </main>
  );
}

export default Main;
