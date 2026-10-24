import React, { useState } from "react";
const minusIcon = "-";
const plusIcon = "+";

function Accordion({ servicesItems }) {
  const [expanded, setExpanded] = useState(null);
  const toggleExpanded = (i) => {
    if (expanded === i) {
      return setExpanded(null);
    }
    setExpanded(i);
  };
  return (
    <>
      {servicesItems.map((item, i) => (
        <div
          key={i}
          className="sm:my-0 md:my-2 shadow-sm cursor-pointer border-secondary-600 hover:border-l-2 hover:-ml-0.5"
          onClick={() => toggleExpanded(i)}
        >
          <div className="text-left items-center h-10 md:h-auto select-none flex justify-between flex-row pl-2  ">
            <h5 className="flex-1 font-semibold ">{item.title}</h5>
            <div className="flex-none pl-2 font-semibold text-xl text-secondary-600">
              {expanded === i ? minusIcon : plusIcon}
            </div>
          </div>

          <div
            className={`overflow-hidden transition-[max-height] duration-700  ${
              expanded === i ? "max-h-40  ease-[cubic-bezier(0.3,0,0.3,0)]" : "max-h-0 ease-[cubic-bezier(0,0.3,0,0.3)]"
            }`}
          >
            <p className="pl-4 pb-2 pt-1 text-left text-sm text-primary-100 ">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
export default Accordion;
