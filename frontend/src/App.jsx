import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Banner from "./components/Banner.jsx";
import AppStore from "./components/AppStore.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Footer from "./components/Footer.jsx";
import ContactPage from "./components/Contact.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Events from "./components/Events.jsx";
import CreateEvent from "./components/CreateEvent.jsx";


const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={ <Login />}/>
          <Route path="/events" element={<Events/>} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/services" element={<Services />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/appstore" element={<AppStore />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
         
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
