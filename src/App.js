import "./App.css";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Product from "./components/Product";
import SSFooter from "./components/SSFooter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Product />
      <Footer />
      <SSFooter />
    </div>
  );
}

export default App;
