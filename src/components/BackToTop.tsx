import React from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:from-teal-600 hover:to-teal-700 transform hover:scale-110"
      aria-label="Kembali ke atas"
    >
      <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
    </button>
  );
};

export default BackToTop;