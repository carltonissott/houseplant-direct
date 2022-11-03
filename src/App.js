// import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Listings from "./pages/Listings";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MyAccount from "./pages/MyAccount";
import AddListing from "./pages/AddListing";
import ListingPage from "./pages/ListingPage";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/addlisting" element={<AddListing />} />
        <Route path="/listings/:producttitle" element={<ListingPage/>}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
