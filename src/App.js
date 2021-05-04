import "./App.scss";

import Header from "./commons/header/header.jsx";
import Main from "./commons/main/main";
import Footer from "./commons/footer-section/footer";
import Navigation from "./commons/navigation/navigation";
import Popup from "./commons/popup/popup";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Main />
      <Footer />
      <Popup />
    </div>
  );
}

export default App;
