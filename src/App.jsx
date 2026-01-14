import { Routes, Route, useLocation } from "react-router-dom";
import Background from "./Pages/Components/Background.jsx";
import { useEffect } from "react";
import Home from "./Pages/Home.jsx";
import NavBar from "./Pages/Components/Navbar.jsx";
import Footer from "./Pages/Components/Footer";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <Background />
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
