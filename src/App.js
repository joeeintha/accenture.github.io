import logo from "./logo.svg";
import "./App.css";
import Navbar from "./lib/components/Navbar";
import Footer from "./lib/components/Footer";
import Anchorlinks from "./lib/components/Anchorlinks";
import Banner from "./lib/components/Banner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Anchorlinks />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Footer />
    </div>
  );
}

export default App;
