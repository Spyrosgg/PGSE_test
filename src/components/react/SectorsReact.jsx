import React, { useState } from "react";
// import { Icon } from "astro-icon/components";
import {
  subBuildingsData,
  subTransportationData,
  subExistingData,
  subUtilityData,
  subTailoredData,
} from "../../consts";

function Sectorsreact() {
  const [active, setActive] = useState(1);
  const [currentData, setCurrentData] = useState(subBuildingsData);

  function toggleActive(sec) {
    switch (sec) {
      case 1:
        setActive(1);
        setCurrentData(subBuildingsData);
        break;

      case 2:
        setActive(2);
        setCurrentData(subTransportationData);
        break;

      case 3:
        setActive(3);
        setCurrentData(subExistingData);
        break;

      case 4:
        setActive(4);
        setCurrentData(subUtilityData);
        break;

      case 5:
        setActive(5);
        setCurrentData(subTailoredData);
        break;
    }
  }

  return (
    <div className="relative min-h-[560px] p-6 pb-12 flex flex-col md:flex-row justify-between lg:justify-start gap-6 text-white">
      <ul className="min-w-[25%] diviide-y-2  border-b-[1px] md:border-b-0 md:border-r-[1px] border-primary-200/40">
        <li
          onClick={() => toggleActive(1)}
          className={`cursor-pointer flex items-center gap-3 px-4 py-4  hover:border-l-4 border-secondary-500 hover:-ml-[4px] ${
            active === 1 ? "bg-primary-400/20" : ""
          }`}
        >
          {/* <Icon name="mdi:home-city-outline" className="h-8 w-8" /> */}
          <h3 className="mb-2 font-bold text-xl">Buildings</h3>
        </li>

        <li
          className={`cursor-pointer flex items-center gap-3 px-4 py-4 hover:border-l-4 border-secondary-500 hover:-ml-[4px] ${
            active === 2 ? "bg-primary-400/20 " : ""
          }`}
        >
          {/* <Icon name="mdi:arrow-left-right" className="h-8 w-8" /> */}
          <h3
            onClick={() => toggleActive(2)}
            className="mb-2 font-bold text-xl"
          >
            Transport
          </h3>
        </li>
        <li
          onClick={() => toggleActive(3)}
          className={`cursor-pointer flex items-center gap-3 px-4 py-4 hover:border-l-4 border-secondary-500 hover:-ml-[4px] ${
            active === 3 ? "bg-primary-400/20 " : ""
          }`}
        >
          {/* <Icon name="mdi:lightning-bolt-circle" className="h-8 w-8" /> */}
          <h3 className="mb-2 font-bold text-xl">Existing Structures</h3>
        </li>
        <li
          onClick={() => toggleActive(4)}
          className={`cursor-pointer flex items-center gap-3 px-4 py-4 hover:border-l-4 border-secondary-500 hover:-ml-[4px] ${
            active === 4 ? "bg-primary-400/20 " : ""
          }`}
        >
          {/* <Icon name="mdi:lightning-bolt-circle" className="h-8 w-8" /> */}
          <h3 className="mb-2 font-bold text-xl">Utility Structures</h3>
        </li>

        <li
          onClick={() => toggleActive(5)}
          className={`cursor-pointer flex items-center gap-3 px-4 py-4 hover:border-l-4 border-secondary-500 hover:-ml-[4px] ${
            active === 5 ? "bg-primary-400/20 " : ""
          }`}
        >
          {/* <Icon name="mdi:hammer-screwdriver" className="h-8 w-8" /> */}
          <h3 className="mb-2 font-bold text-xl">Tailored</h3>
        </li>
      </ul>

      <div className="min-w-[25%] border-b-[1px] pb-4 md:border-b-0 md:border-r-[1px] border-primary-200/40 ">
        <ul className="list-disc">
          {currentData.map((item, i) => (
            <li
              key={i}
              className="pr-4 ml-8 sm:my-0 md:my-2 shadow-sm  text-white "
            >
              {item.sub}
            </li>
          ))}
        </ul>
      </div>

      <div className="">
        <ul className="list-none">
          {currentData.map((item, i) => (
            <li key={i} className=" py-1 sm:my-0 md:my-2 shadow-sm  text-white">
              {" "}
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m11.602 13.76l1.412 1.412l8.466-8.466l1.414 1.415l-9.88 9.88l-6.364-6.365l1.414-1.414l2.125 2.125l1.413 1.412Zm.002-2.828l4.952-4.953l1.41 1.41l-4.952 4.953l-1.41-1.41Zm-2.827 5.655L7.364 18L1 11.636l1.414-1.414l1.413 1.413l-.001.001l4.951 4.951Z"
                  ></path>
                </svg>
                {item.desc}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Sectorsreact;
