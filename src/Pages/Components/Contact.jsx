import React, { useState } from "react";
import { Phone, Send, CheckCircle2, Sparkles } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      firstName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="w-[90%] lg:w-[60%] rounded-xl mx-auto py-12 lg:py-16 bg-[#122124c9] backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 flex flex-col justify-center items-center">
          <div className="inline-flex items-center gap-2 bg-[#CFA80F]/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#e8c32e]" />
            <span className="text-sm font-semibold text-[#e8c32e] tracking-wide">
              FREE 30-Minute Consultation
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Ready to Travel with
            <span className="block text-[#e8c32e] mt-2">
              Complete Peace of Mind?
            </span>
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            Book your free consultation and discover how we handle everything—so
            you can focus on making memories.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 w-full max-w-2xl">
            <div className="flex items-center gap-2 text-white bg-white/5 px-4 py-3 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-[#e8c32e] flex-shrink-0" />
              <span className="text-sm">No Obligations</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/5 px-4 py-3 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-[#e8c32e] flex-shrink-0" />
              <span className="text-sm">Expert Guidance</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/5 px-4 py-3 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-[#e8c32e] flex-shrink-0" />
              <span className="text-sm">Custom Solutions</span>
            </div>
          </div>
        </div>
        {/* CTA Button */}
        <div className="flex flex-col justify-center  items-center flex-0">
          <button
            onClick={() => {
              window.open("https://calendly.com/momsvsanxiety/30min", "_blank");
            }}
            className="group cursor-pointer relative h-16 min-w-[280px] px-8
                        bg-gradient-to-r from-[#2d5a2f] to-[#3a7a3d] text-white font-bold text-lg rounded-xl 
                        border-2 border-[#e8c32e] px-6
                        hover:text-white hover:shadow-[0_0_30px_rgba(232,195,46,0.5)]
                        transition-all duration-300 shadow-lg hover:scale-105 w-[50%]
                        flex items-center gap-3 justify-center overflow-hidden"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e8c32e]/30 to-transparent
                          -translate-x-full group-hover:translate-x-full transition-transform duration-700"
            />

            <Phone className="w-6 h-6 animate-pulse" />
            <span>Book Your Free Call</span>
          </button>

          <p className="text-sm text-gray-400 mt-4 ">
            ⏱️ Available slots filling fast · Select your preferred time
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
