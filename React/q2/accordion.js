import React, { useState } from "react";

function Accordion({ content, header }) {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{header}</h2>
        <span>{expanded ? "-" : "+"}</span>
      </div>
      {expanded && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
