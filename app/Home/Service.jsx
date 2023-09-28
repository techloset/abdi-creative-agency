import React from "react";
import Link from "next/link";

const cards = [
  {
    svg: "/assets/images/svg/flame.svg",
    title: "Ideate",
    description:
      "We help you develop creative ideas so that your business can grow more rapidly",
    color: "bg-white",
    shadowColor: "shadow-white/40",
  },
  {
    svg: "/assets/images/svg/pen.svg",
    title: "Design",
    description:
      "We provide services with the best designs than our designer team for your business",
    color: "bg-main-red",
    shadowColor: "shadow-main-red/40",
  },
  {
    svg: "/assets/images/svg/desktop.svg",
    title: "Web Development",
    description:
      "We help develop company websites to be more professional and attractive",
    color: "bg-main-green",
    shadowColor: "shadow-main-green/40",
  },
  {
    svg: "/assets/images/svg/mobile.svg",
    title: "App Development",
    description:
      "We help you develop creative ideas so that your business can grow more rapidly",
    color: "bg-main-yellow",
    shadowColor: "shadow-main-yellow/40",
  },
  {
    svg: "/assets/images/svg/building.svg",
    title: "Business Growth",
    description:
      "We also provide services by providing input for your business growth",
    color: "bg-main-blue",
    shadowColor: "shadow-main-blue/40",
  },
  {
    svg: "/assets/images/svg/chart.svg",
    title: "Digital marketing",
    description:
      "We also help you market your products through an online marketplace",
    color: "bg-main-orange",
    shadowColor: "shadow-main-orange/40",
  },
];

function Service() {
  return (
    <section>
      <div className="servicesSection relative pb-[100px] lg:pb-[200px]">
        <div className="absolute right-0 -z-10 w-full -bottom-52 hidden lg:block">
          <img
            src="/assets/images/bg-service.png"
            alt="bgService"
            className="w-full"
          />
        </div>
        <div className="mx-[24px] lg:mx-[70px] xl:mx-[160px]">
          <div className="heading space-y-5 xl:px-4 sm:p-0 mb-[60px]">
            <h6 className="text-[#FF2D59] dark:text-main-yellow text-center text-lg xl:text-xl font-semibold">
              Our Services
            </h6>
            <h3 className="text-center text-[#111029] mx-auto lg:max-w-[65%] xl:max-w-[1120px] dark:text-white text-2xl xl:text-[42px] px-1 tracking-[-0.1px] font-semibold xl:leading-[56px]">
              The various services we provide to make your business more
              powerful
            </h3>
          </div>
          <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-x-8 gap-y-[60px]">
            {cards.map((cardData, index) => (
              <div key={index} className="flex justify-center">
                <div
                  className={`card self-center py-11 px-[30px] ${
                    cardData.title === "Ideate"
                      ? "bg-main-purple hover:scale-105"
                      : "bg-white dark:bg-main-bg hover:scale-105"
                  } shadow-2xl dark:shadow-service-shadow transition-all duration-700 space-y-11 max-w-[352px] flex flex-col rounded-2xl items-center`}
                >
                  <div
                    className={`p-8 shadow-xl ${cardData.color} ${cardData.shadowColor} rounded-full`}
                  >
                    <img src={cardData.svg} alt="" />
                  </div>
                  <div className="info space-y-4">
                    <h3
                      className={`${
                        cardData.title === "Ideate"
                          ? "text-white"
                          : "dark:text-white"
                      } text-lg xl:text-xl font-semibold`}
                    >
                      {cardData.title}
                    </h3>
                    <p
                      className={`text-main-gray ${
                        cardData.title === "Ideate"
                          ? "text-white"
                          : "dark:text-white"
                      }  lg:max-w-[292px] leading-[32px] text-base xl:text-lg xl:leading-[32px] font-normal`}
                    >
                      {cardData.description}
                    </p>
                  </div>
                  <Link href="#">
                    <div
                      className={`${
                        cardData.title === "Ideate"
                          ? "bg-white"
                          : "bg-[#F3F4F6] dark:bg-[#020E2D]"
                      } p-[17px] rounded-full dark:fill-blue-600 fill-blue-600`}
                    >
                      <svg
                        className={`font-bold w-[11px] h-[11px] ${
                          cardData.title === "Ideate"
                            ? "fill-main-purple"
                            : "fill-main-purple dark:fill-white"
                        }`}
                        width="12.000000pt"
                        height="12.000000pt"
                        viewBox="0 0 12.000000 12.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g transform="translate(0.000000,12.000000) scale(0.100000,-0.100000)">
                          <path d="M65 90 c-18 -20 -17 -20 -18 -20 -21 0 -37 -4 -37 -10 0 -5 16 -10 37 -10 35 0 36 0 18 -20 -26 -29 -3 -24 25 5 l23 25 -23 25 c-28 29 -51 34 -25 5z" />
                        </g>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
