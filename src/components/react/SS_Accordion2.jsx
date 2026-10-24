import { Image } from "astro:assets";

import React, { useState } from "react";
const minusIcon = "-";
const plusIcon = "+";

function Accordion({ picture, type, alt, reverse, servicesItems }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded((current) => !current);
  };
  return (
    <div
      class:list={[
        reverse ? "md:flex-row-reverse" : "md:flex-row",
        "flex flex-col md:justify-center",
      ]}
    >
      <div class="md:max-w-lg relative flex justify-center">
        <h1
          class:list={[
            reverse
              ? "md:rounded-r-2xl rounded-t-2xl md:rounded-tl-none"
              : "md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none",
            "absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-5xl font-bold text-white bg-primary-900/30",
          ]}
        >
          {type}
        </h1>
        <Image
          class:list={[
            reverse
              ? "md:rounded-r-2xl rounded-t-2xl md:rounded-tl-none"
              : "md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none",
            "-z-10 relative h-52 md:h-full md:max-h-[577px] overflow-hidden object-cover",
          ]}
          src={picture}
          width={800}
          height={577}
          alt={alt}
        />
      </div>
      <div
        class:list={[
          reverse
            ? "md:rounded-l-2xl rounded-b-2xl md:rounded-br-none"
            : "md:rounded-r-2xl rounded-b-2xl md:rounded-bl-none",
          "bg-primary-800 text-white md:w-[400px] md:max-w-md md:min-w-[300px] p-6 pl-4 inline-block ",
        ]}
      >
        {servicesItems.map((item, i) => (

          <div
            className="sm:my-0 md:my-2 shadow-sm cursor-pointer border-secondary-600 hover:border-l-2 hover:-ml-0.5"
            onClick={toggleExpanded}
          >
            <div className="text-left items-center h-10 select-none flex justify-between flex-row pl-2  ">
              <h5 className="flex-1 font-semibold ">{item.title}</h5>
              <div className="flex-none pl-2 text-xl text-primary-300/50">
                {expanded ? minusIcon : plusIcon}
              </div>
            </div>

            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                expanded ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="pl-4  text-left text-sm text-primary-100 ">
                {item.content}
              </p>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}
export default Accordion;

