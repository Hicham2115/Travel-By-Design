import { Routes, Route, useLocation } from "react-router-dom";
import Background from "./Pages/Components/Background.jsx";
import { useEffect, useState, Suspense } from "react";
import NavBar from "./Pages/Components/NavBar.jsx";
import Footer from "./Pages/Components/Footer";
import CursorFollower from "./components/CursorFollower.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import BookCallPopup from "./Pages/Components/BookCallPopup.jsx";
import Home from "./Pages/Home.jsx";

// const Home = lazy(() => import("./Pages/Home.jsx")); // commented per request

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

  // Pause animations when page is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.body.classList.add("page-hidden");
      } else {
        document.body.classList.remove("page-hidden");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <BookCallPopup />

      <CursorFollower />
      <WhatsAppButton />
      <ScrollToTopButton />
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
