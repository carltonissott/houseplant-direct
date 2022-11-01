import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Listings from "./pages/Listings";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
