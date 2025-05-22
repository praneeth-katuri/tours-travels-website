import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Packages from "../pages/Packages";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AdminDashboard from "../pages/AdminDashboard";
import LoginPage from "../pages/LoginPage";

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
