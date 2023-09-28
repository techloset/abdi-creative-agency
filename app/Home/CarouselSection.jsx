"use client";
import React, { useState } from "react";

function CarouselSection() {
  const [id, setId] = useState(1);

  const setvalue = () => {
    if (id < 3) {
      setId(id + 1);
    } else {
      setId(id - 2);
    }
  };

  return (
    <div className="bg-[#FE9602] dark:bg-[#020E2D] py-[100px]  md:px-0">
      <div className="relative mx-[24px] lg:mx-[70px]  xl:mx-[160px]">
        {/* item */}
        <div
          className={`flex-col text-white space-y-[44px] ${
            id === 1 ? "flex" : "hidden"
          }`}
        >
          <div className="flex justify-center">
            <img
              src="/assets/images/quotation-mark.png"
              alt="quoteMark"
              className=" shadow-testimonial-shadow"
            />
          </div>
          <div className="grid justify-center">
            <p className="text-lg md:text-2xl xl:text-[28px] xl:leading-10 font-normal w-[65%] mx-auto px-4 text-white lg:w-[723px] text-center">
              We are serious about providing our best service to all the
              customers we help. Customers satisfaction is our number one
              priority.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-base md:text-xl text-center">Mark Garfield</p>
            <p className="text-base md:text-xl text-center">
              CEO & Head of Product
            </p>
            {/* bar */}
            <div className="mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="5"
                viewBox="0 0 72 5"
                fill="none"
              >
                <rect
                  y="0.353516"
                  width="15"
                  height="4"
                  rx="2"
                  className="fill-[#FFF]"
                />
                <rect
                  x="19"
                  y="0.353516"
                  width="15"
                  height="4"
                  rx="2"
                  className="fill-[#FFCC00]"
                />
                <rect
                  x="38"
                  y="0.353516"
                  width="15"
                  height="4"
                  rx="2"
                  className="fill-[#FFCC00]"
                />
                <rect
                  x="57"
                  y="0.353516"
                  width="15"
                  height="4"
                  rx="2"
                  className="fill-[#FFCC00]"
                />
              </svg>
            </div>
            {/* bar */}
          </div>
        </div>
        {/* item */}
        {/* item2 */}
        <div
          className={`flex-col text-white space-y-[44px] ${
            id === 2 ? "flex" : "hidden"
          }`}
        >
          <div className="flex justify-center">
            <img
              src="/assets/images/quotation-mark.png"
              alt="quoteMark"
              className=" shadow-testimonial-shadow"
            />
          </div>
          <div className="grid justify-center">
            <p className="text-lg md:text-2xl xl:text-[28px] xl:leading-10 font-normal w-[65%] mx-auto px-4 text-white lg:w-[723px] text-center">
              We are serious about providing our best service to all the
              customers we help. Customers satisfaction is our number one
              priority.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-base md:text-xl text-center">Abdullah Murtaza</p>
            <p className="text-base md:text-xl text-center">
              CEO & Head of Product
            </p>
            {/* bar */}
            <div className="mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="5"
                viewBox="0 0 72 5"
                fill="none"
              >
                <rect
                  y="0.353516"
                  width="15"
                  height="4"
                  rx="2"
                  className="fill-[#FFCC00]"
                />
                <rect
                  x="19"
                  y="0.353516"
                  width="15"
                  height="4"
                  rx="2"
                  className="fill-[#FFF]"
                />
                <rect
                  x="38"
                  y="0.353516"
                  width="15"
                  height="4"
                  rx="2"
                  className="fill-[#FFCC00]"
                />
                <rect
                  x="57"
                  y="0.353516"
                  width="15"
                  height="4"
                  rx="2"
                  className="fill-[#FFCC00]"
                />
              </svg>
            </div>
            {/* bar */}
          </div>
        </div>
        {/* item2 */}
        {/* item3 */}
        <div
          className={`flex-col text-white space-y-[44px] ${
            id === 3 ? "flex" : "hidden"
          }`}
        >
          <div className="flex justify-center">
            <img
              src="/assets/images/quotation-mark.png"
              alt="quoteMark"
              className=" shadow-testimonial-shadow"
            />
          </div>
          <div className="grid justify-center">
            <p className="text-lg md:text-2xl xl:text-[28px] xl:leading-10 font-normal w-[65%] mx-auto px-4 text-white lg:w-[723px] text-center">
              We are serious about providing our best service to all the
              customers we help. Customers satisfaction is our number one
              priority.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-base md:text-xl text-center">Abdi</p>
            <p className="text-base md:text-xl text-center">
              CEO & Head of Product
            </p>
            {/* bar */}
            <div className="mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="72"
                height="5"
                viewBox="0 0 72 5"
                fill="none"
              >
                <rect
                  y="0.353516"
                  width="15"
                  height="4"
                  rx="2"
                  className="fill-[#FFCC00]"
                />
                <rect
                  x="19"
                  y="0.353516"
                  width="15"
                  height="4"
                  rx="2"
                  className="fill-[#FFCC00]"
                />
                <rect
                  x="38"
                  y="0.353516"
                  width="15"
                  height="4"
                  rx="2"
                  className="fill-[#FFF]"
                />
                <rect
                  x="57"
                  y="0.353516"
                  width="15"
                  height="4"
                  rx="2"
                  className="fill-[#FFCC00]"
                />
              </svg>
            </div>
            {/* bar */}
          </div>
        </div>
        {/* item3 */}

        {/* navigation */}
        <div
          onClick={setvalue}
          className="image-swiper-button-next right-0 top-[40%] md:top-[50%] p-4 absolute rounded-full dark:bg-main-gray dark:fill-white hover:fill-white hover:bg-main-purple bg-white w-fit fill-main-purple"
        >
          <svg
            className="font-bold w-[12px] h-[12px]"
            width="12.000000pt"
            height="12.000000pt"
            viewBox="0 0 12.000000 12.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g transform="translate(0.000000,12.000000) scale(0.100000,-0.100000)">
              <path d="M65 90 c18 -20 17 -20 -18 -20 -21 0 -37 -4 -37 -10 0 -5 16 -10 37 -10 35 0 36 0 18 -20 -26 -29 -3 -24 25 5 l23 25 -23 25 c-28 29 -51 34 -25 5z" />
            </g>
          </svg>
        </div>
        <div
          onClick={setvalue}
          className="image-swiper-button-prev rotate-180 top-[40%] md:top-[50%] p-4 absolute rounded-full dark:bg-main-gray dark:fill-white hover:fill-white hover:bg-main-purple bg-white w-fit fill-main-purple"
        >
          <svg
            className="font-bold w-[12px] h-[12px]"
            width="12.000000pt"
            height="12.000000pt"
            viewBox="0 0 12.000000 12.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g transform="translate(0.000000,12.000000) scale(0.100000,-0.100000)">
              <path d="M65 90 c18 -20 17 -20 -18 -20 -21 0 -37 -4 -37 -10 0 -5 16 -10 37 -10 35 0 36 0 18 -20 -26 -29 -3 -24 25 5 l23 25 -23 25 c-28 29 -51 34 -25 5z" />
            </g>
          </svg>
        </div>
        {/* navigation */}
      </div>
    </div>
  );
}

export default CarouselSection;
