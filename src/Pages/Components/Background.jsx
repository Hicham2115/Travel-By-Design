import React from "react";

const Background = React.memo(() => {
  return (
    <div className="fixed inset-0 -z-10 bg-linear-to-br from-[#0a4d3c] via-[#0d5e4a] to-[#1a4d3f]">
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-linear-to-tr from-[#083d30]/50 via-transparent to-[#0f6b52]/30"></div>

      {/* Glowing orbs */}
      <div className="absolute top-20 right-32 w-96 h-96 bg-[#d4af37]/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-32 left-20 w-[500px] h-[500px] bg-[#c9a961]/18 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Islamic Hexagonal Tile Pattern (Zellige inspired) */}
      <div className="absolute inset-0 opacity-[0.18]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="zellije"
              x="0"
              y="0"
              width="100"
              height="87"
              patternUnits="userSpaceOnUse"
            >
              {/* Hexagonal tiles */}
              <polygon
                points="50,0 90,22 90,65 50,87 10,65 10,22"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1"
              />
              {/* Inner star detail */}
              <polygon
                points="50,17 60,35 50,43 40,35"
                fill="none"
                stroke="#d4af37"
                strokeWidth="0.6"
              />
              <polygon
                points="50,43 60,52 50,70 40,52"
                fill="none"
                stroke="#d4af37"
                strokeWidth="0.6"
              />
              {/* Connecting lines */}
              <line
                x1="30"
                y1="43.5"
                x2="50"
                y2="43.5"
                stroke="#d4af37"
                strokeWidth="0.5"
                opacity="0.6"
              />
              <line
                x1="50"
                y1="43.5"
                x2="70"
                y2="43.5"
                stroke="#d4af37"
                strokeWidth="0.5"
                opacity="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#zellije)" />
        </svg>
      </div>

      {/* Mosque dome silhouettes in corners */}
      <div className="absolute top-0 left-0 w-80 h-80 opacity-[0.12]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Islamic Lantern */}
          <g transform="translate(50, 30)">
            {/* Top hook */}
            <circle
              cx="50"
              cy="5"
              r="3"
              fill="none"
              stroke="#d4af37"
              strokeWidth="1.5"
            />
            <line
              x1="50"
              y1="8"
              x2="50"
              y2="15"
              stroke="#d4af37"
              strokeWidth="1.5"
            />

            {/* Top dome */}
            <path
              d="M 35 15 L 45 25 L 55 25 L 65 15 Z"
              fill="none"
              stroke="#d4af37"
              strokeWidth="2"
            />

            {/* Lantern body with geometric pattern */}
            <rect
              x="40"
              y="25"
              width="20"
              height="35"
              fill="none"
              stroke="#d4af37"
              strokeWidth="2"
            />

            {/* Geometric pattern inside */}
            <line
              x1="40"
              y1="35"
              x2="60"
              y2="35"
              stroke="#d4af37"
              strokeWidth="0.8"
            />
            <line
              x1="40"
              y1="45"
              x2="60"
              y2="45"
              stroke="#d4af37"
              strokeWidth="0.8"
            />
            <line
              x1="40"
              y1="55"
              x2="60"
              y2="55"
              stroke="#d4af37"
              strokeWidth="0.8"
            />
            <line
              x1="45"
              y1="25"
              x2="45"
              y2="60"
              stroke="#d4af37"
              strokeWidth="0.8"
            />
            <line
              x1="50"
              y1="25"
              x2="50"
              y2="60"
              stroke="#d4af37"
              strokeWidth="0.8"
            />
            <line
              x1="55"
              y1="25"
              x2="55"
              y2="60"
              stroke="#d4af37"
              strokeWidth="0.8"
            />

            {/* Bottom ornate base */}
            <path
              d="M 35 60 L 40 65 L 60 65 L 65 60"
              fill="none"
              stroke="#d4af37"
              strokeWidth="2"
            />
            <line
              x1="45"
              y1="65"
              x2="50"
              y2="75"
              stroke="#d4af37"
              strokeWidth="1.5"
            />
            <line
              x1="55"
              y1="65"
              x2="50"
              y2="75"
              stroke="#d4af37"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="75" r="2" fill="#d4af37" />
          </g>
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-[0.12]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Islamic Lantern */}
          <g transform="translate(50, 30)">
            {/* Top hook */}
            <circle
              cx="50"
              cy="5"
              r="3"
              fill="none"
              stroke="#d4af37"
              strokeWidth="1.5"
            />
            <line
              x1="50"
              y1="8"
              x2="50"
              y2="15"
              stroke="#d4af37"
              strokeWidth="1.5"
            />

            {/* Top dome */}
            <path
              d="M 35 15 L 45 25 L 55 25 L 65 15 Z"
              fill="none"
              stroke="#d4af37"
              strokeWidth="2"
            />

            {/* Lantern body with geometric pattern */}
            <rect
              x="40"
              y="25"
              width="20"
              height="35"
              fill="none"
              stroke="#d4af37"
              strokeWidth="2"
            />

            {/* Geometric pattern inside */}
            <line
              x1="40"
              y1="35"
              x2="60"
              y2="35"
              stroke="#d4af37"
              strokeWidth="0.8"
            />
            <line
              x1="40"
              y1="45"
              x2="60"
              y2="45"
              stroke="#d4af37"
              strokeWidth="0.8"
            />
            <line
              x1="40"
              y1="55"
              x2="60"
              y2="55"
              stroke="#d4af37"
              strokeWidth="0.8"
            />
            <line
              x1="45"
              y1="25"
              x2="45"
              y2="60"
              stroke="#d4af37"
              strokeWidth="0.8"
            />
            <line
              x1="50"
              y1="25"
              x2="50"
              y2="60"
              stroke="#d4af37"
              strokeWidth="0.8"
            />
            <line
              x1="55"
              y1="25"
              x2="55"
              y2="60"
              stroke="#d4af37"
              strokeWidth="0.8"
            />

            {/* Bottom ornate base */}
            <path
              d="M 35 60 L 40 65 L 60 65 L 65 60"
              fill="none"
              stroke="#d4af37"
              strokeWidth="2"
            />
            <line
              x1="45"
              y1="65"
              x2="50"
              y2="75"
              stroke="#d4af37"
              strokeWidth="1.5"
            />
            <line
              x1="55"
              y1="65"
              x2="50"
              y2="75"
              stroke="#d4af37"
              strokeWidth="1.5"
            />
            <circle cx="50" cy="75" r="2" fill="#d4af37" />
          </g>
        </svg>
      </div>

      {/* Islamic calligraphy-inspired flourishes */}
      <div className="absolute top-1/2 left-10 opacity-[0.08]">
        <svg width="150" height="150" viewBox="0 0 100 100">
          <path
            d="M 20 50 Q 30 30 50 40 Q 70 50 60 70 Q 50 80 30 70"
            fill="none"
            stroke="#d4af37"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="50" cy="40" r="3" fill="#d4af37" opacity="0.6" />
        </svg>
      </div>

      <div className="absolute top-1/3 right-10 opacity-[0.08]">
        <svg width="150" height="150" viewBox="0 0 100 100">
          <path
            d="M 80 50 Q 70 30 50 40 Q 30 50 40 70 Q 50 80 70 70"
            fill="none"
            stroke="#d4af37"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="50" cy="40" r="3" fill="#d4af37" opacity="0.6" />
        </svg>
      </div>

      {/* Mihrab (prayer niche) arch pattern */}
      <div className="absolute bottom-1/4 left-1/3 opacity-[0.10]">
        <svg width="180" height="200" viewBox="0 0 100 120">
          {/* Outer arch */}
          <path
            d="M 20 100 L 20 40 Q 20 20 50 20 Q 80 20 80 40 L 80 100"
            fill="none"
            stroke="#d4af37"
            strokeWidth="2"
          />
          {/* Inner decorative arch */}
          <path
            d="M 30 90 L 30 50 Q 30 35 50 35 Q 70 35 70 50 L 70 90"
            fill="none"
            stroke="#d4af37"
            strokeWidth="1.2"
            opacity="0.7"
          />
          {/* Geometric details */}
          <circle
            cx="50"
            cy="60"
            r="8"
            fill="none"
            stroke="#d4af37"
            strokeWidth="0.8"
          />
          <line
            x1="50"
            y1="35"
            x2="50"
            y2="52"
            stroke="#d4af37"
            strokeWidth="0.6"
          />
        </svg>
      </div>
    </div>
  );
});

export default Background;
