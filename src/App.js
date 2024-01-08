import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import BookingPage from "./components/BookingPage";
import HomePage from "./components/HomePage";
import Testimonials from "./components/Testimonials";
import Specials from "./components/Specials";

function App() {
  return (
    <>
      {/* router */}
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<BookingPage />} />
            <Route path="/specials" element={<Specials />} />
            <Route path="/BookingPage" element={<BookingPage />} />
            <Route path="/" element={<BookingPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>

        {/* other components */}
        <Hero />
        <HomePage />
        <Specials />
        <Testimonials />
        <AboutUs />
        <BookingPage />
      </Router>
    </>
  );
}

export default App;
