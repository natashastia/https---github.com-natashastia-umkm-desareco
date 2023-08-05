import { Routes, Route } from "react-router-dom";
import "./index.css";
import Landing from "./pages/Landing.jsx";
import AboutUs from "./pages/landing/aboutus.jsx";
import ContactUs from "./pages/landing/contactus.jsx";
import Details from "./pages/details.jsx";
import Data from "./pages/dataumkm.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </>
  );
}

export default App;
