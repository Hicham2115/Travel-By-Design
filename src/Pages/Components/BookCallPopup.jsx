import React, { useState, useEffect } from "react";
import { X, Phone, Calendar } from "lucide-react";

function BookCallPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds on every page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  const handleBookCall = () => {
    window.open("https://calendly.com/momsvsanxiety/30min", "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-16 right-4 z-50 max-w-sm animate-in slide-in-from-top-5 duration-500">
      <div className="bg-gradient-to-r from-[#122124] to-[#1a2f32] border-2 border-[#e8c32e] rounded-xl shadow-2xl p-4 relative">
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="flex items-start gap-3 pr-6">
          <div className="w-10 h-10 bg-gradient-to-br from-[#256641] to-[#2d5a2f] rounded-full flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-[#e8c32e]" />
          </div>

          <div className="flex-1">
            <h3 className="text-white font-bold text-sm mb-1">
              Travel Halal, Travel Easy
            </h3>
            <p className="text-gray-300 text-xs mb-3">
              Book a FREE 30-min consultation
            </p>

            <button
              onClick={handleBookCall}
              className="w-full h-9 px-4 bg-gradient-to-r from-[#256641] to-[#2d5a2f] 
                        text-white font-semibold text-sm rounded-lg border border-[#e8c32e]
                        hover:shadow-[0_0_15px_rgba(232,195,46,0.4)] transition-all duration-300
                        flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCallPopup;
