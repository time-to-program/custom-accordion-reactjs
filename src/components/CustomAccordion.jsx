import React, { useState } from "react";
import "./CustomAccordion.css";

const CustomAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the accordion state
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? "active" : ""}`}>
      {/* Header section of the accordion */}
      <div className={`accordion-header ${isOpen ? "active" : ""}`} onClick={toggleAccordion}>
        <p>{title}</p>

        {/* Icon to represent the accordion state */}
        <span class={`material-symbols-outlined ${isOpen ? "active" : ""}`}>
          expand_more
        </span>
      </div>

      {/* Content section of the accordion*/}
      {isOpen && (
        <div className="accordion-content">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
};

export default CustomAccordion;
