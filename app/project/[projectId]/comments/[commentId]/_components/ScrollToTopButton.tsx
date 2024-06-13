"use client";

import React from "react";

function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-10 right-10 rounded-full bg-blue-500 p-4 text-white shadow-lg hover:bg-blue-700 focus:outline-none">
      Scroll to Top
    </button>
  );
}

export default ScrollToTopButton;
