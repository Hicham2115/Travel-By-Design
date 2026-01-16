import { Routes, Route, useLocation } from "react-router-dom";
import Background from "./Pages/Components/Background.jsx";
import { useEffect, useState, lazy, Suspense } from "react";
import NavBar from "./Pages/Components/Navbar.jsx";
import Footer from "./Pages/Components/Footer";
import CursorFollower from "./components/CursorFollower.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";

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
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {showContent && (
        <>
          <CursorFollower />
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
        </>
      )}
    </>
  );
}
