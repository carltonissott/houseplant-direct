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
        <Route path="/houseplant-direct/" element={<HomePage />} />
        <Route path="/houseplant-direct/faq" element={<FAQ />} />
        <Route path="/houseplant-direct/listings" element={<Listings />} />
        <Route path="/houseplant-direct/about" element={<About />} />
        <Route path="/houseplant-direct/signup" element={<SignUp />} />
        <Route path="/houseplant-direct/signin" element={<SignIn />} />
        <Route path="/houseplant-direct/myaccount" element={<MyAccount />} />
        <Route path="/houseplant-direct/addlisting" element={<AddListing />} />
        <Route path="/houseplant-direct/listings/:producttitle" element={<ListingPage/>}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
