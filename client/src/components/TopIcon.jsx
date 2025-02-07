import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 
            bg-[#011728] text-white p-2 rounded-full 
            shadow-lg 
            transition-all duration-300 
            flex items-center justify-center 
            w-10 h-10 md:w-12 md:h-12
            animate-bounce-in-down" // Custom animation class
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
