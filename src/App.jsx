import { Routes, Route, useLocation } from "react-router-dom";
import Background from "./Pages/Components/Background.jsx";
import { useEffect, useState, lazy, Suspense } from "react";
import NavBar from "./Pages/Components/NavBar.jsx";
import Footer from "./Pages/Components/Footer";
import CursorFollower from "./components/CursorFollower.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import BookCallPopup from "./Pages/Components/BookCallPopup.jsx";

// Lazy load the Home component for better performance
const Home = lazy(() => import("./Pages/Home.jsx"));

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
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <BookCallPopup />

      <CursorFollower />
      {/* <ScrollToTopButton /> */}
      <WhatsAppButton />
      <Background />
      <NavBar />
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
    </>
  );
}
