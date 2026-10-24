import React, { useState } from "react";
const minusIcon = "-";
const plusIcon = "+";

function Accordion({ title, content, i }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded((current) => !current);
  };
  return (
    <div
      className="sm:my-0 md:my-2 shadow-sm cursor-pointer border-secondary-600 hover:border-l-2 hover:-ml-0.5"
      onClick={toggleExpanded}
    >
      <div className="text-left items-center h-10 select-none flex justify-between flex-row pl-2  ">
        <h5 className="flex-1 font-semibold ">{title}</h5>
        <div className="flex-none pl-2 text-xl text-primary-300/50">
          {expanded ? minusIcon : plusIcon}
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${expanded ? "max-h-40" : "max-h-0"}`}>
        <p className="pl-4  text-left text-sm text-primary-100 ">
          {content}
        </p>
      </div>
    </div>
  );
}
export default Accordion;


