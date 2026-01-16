import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 800); // Wait for exit animation
          }, 300);
          return 100;
        }
        // Faster initial loading, slower near the end for realism
        const increment = prev < 60 ? Math.random() * 15 : Math.random() * 5;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-10000 flex items-center justify-center bg-linear-to-br from-[#0a4d3c] via-[#0d5e4a] to-[#1a4d3f]"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="loading-pattern"
                  x="0"
                  y="0"
                  width="100"
                  height="87"
                  patternUnits="userSpaceOnUse"
                >
                  <polygon
                    points="50,0 90,22 90,65 50,87 10,65 10,22"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#loading-pattern)" />
            </svg>
          </div>

          {/* Glowing orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-32 w-96 h-96 bg-[#d4af37]/20 rounded-full blur-3xl"
          />

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-4">
            {/* Islamic Lantern Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              <motion.svg
                width="120"
                height="120"
                viewBox="0 0 100 100"
                className="drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <g transform="translate(0, 10)">
                  {/* Top hook */}
                  <circle
                    cx="50"
                    cy="5"
                    r="3"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="2"
                  />
                  <line
                    x1="50"
                    y1="8"
                    x2="50"
                    y2="15"
                    stroke="#d4af37"
                    strokeWidth="2"
                  />

                  {/* Top dome */}
                  <path
                    d="M 30 15 L 42 28 L 58 28 L 70 15 Z"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="2.5"
                  />

                  {/* Lantern body */}
                  <rect
                    x="37"
                    y="28"
                    width="26"
                    height="40"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="2.5"
                  />

                  {/* Geometric pattern inside */}
                  <line
                    x1="37"
                    y1="40"
                    x2="63"
                    y2="40"
                    stroke="#d4af37"
                    strokeWidth="1"
                  />
                  <line
                    x1="37"
                    y1="52"
                    x2="63"
                    y2="52"
                    stroke="#d4af37"
                    strokeWidth="1"
                  />
                  <line
                    x1="45"
                    y1="28"
                    x2="45"
                    y2="68"
                    stroke="#d4af37"
                    strokeWidth="1"
                  />
                  <line
                    x1="50"
                    y1="28"
                    x2="50"
                    y2="68"
                    stroke="#d4af37"
                    strokeWidth="1"
                  />
                  <line
                    x1="55"
                    y1="28"
                    x2="55"
                    y2="68"
                    stroke="#d4af37"
                    strokeWidth="1"
                  />

                  {/* Bottom base */}
                  <path
                    d="M 30 68 L 37 75 L 63 75 L 70 68"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="2.5"
                  />
                  <line
                    x1="42"
                    y1="75"
                    x2="50"
                    y2="85"
                    stroke="#d4af37"
                    strokeWidth="2"
                  />
                  <line
                    x1="58"
                    y1="75"
                    x2="50"
                    y2="85"
                    stroke="#d4af37"
                    strokeWidth="2"
                  />
                  <circle cx="50" cy="85" r="3" fill="#d4af37" />
                </g>
              </motion.svg>
            </motion.div>

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
                Abu Retreats
              </h1>
              <p className="text-[#d4af37] text-lg md:text-xl font-semibold">
                Halal Journeys in Morocco
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="w-64 md:w-80"
            >
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-linear-to-r from-[#d4af37] via-[#e8c127] to-[#d4af37] rounded-full"
                  style={{ width: `${progress}%` }}
                  initial={{ width: "0%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </div>

              {/* Progress Percentage */}
              <motion.p
                className="text-center mt-3 text-white/80 text-sm font-medium"
                key={Math.floor(progress)}
              >
                {Math.floor(progress)}%
              </motion.p>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-white/60 text-sm flex items-center gap-2"
            >
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Preparing your journey
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                ...
              </motion.span>
            </motion.div>

            {/* Arabic Bismillah */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-[#d4af37]/80 text-xl md:text-2xl font-bold mt-4"
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
