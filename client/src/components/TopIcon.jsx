import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    setScrollProgress(scrollPercent);
    setIsVisible(scrollTop > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 right-4 z-50 
            flex items-center justify-center 
            w-12 h-12 md:w-14 md:h-14 rounded-full 
            shadow-lg transition-transform duration-300 transform hover:scale-105"
          aria-label="Scroll to top"
          style={{
            backgroundColor: "#011728",
            position: "fixed",
            bottom: "16px",
            right: "16px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "56px",
            height: "56px",
            transition: "all 0.3s ease-in-out",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            outline: "3px solid transparent",
            backgroundImage: `conic-gradient(white ${scrollProgress}%, transparent ${scrollProgress}%)`,
            willChange: "background-image",
          }}
        >
          <ChevronUp className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
