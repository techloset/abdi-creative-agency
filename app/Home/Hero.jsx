import React from "react";

function Hero() {
  return (
    <div className="heroSection bg-cover  xl:bg-hero-img pb-[100px] lg:pb-[200px] bg-no-repeat bg-none">
      <div className="mx-[24px] lg:mx-[80px] xl:ms-[160px] xl:me-10">
        <div className="flex flex-wrap xl:flex-nowrap xl:justify-between items-center">
          {/* Left Section */}
          <div className="text gap-y-6 flex flex-col dark:text-white">
            <h1 className="text-3xl md:text-[42px] xl:text-[56px] leading-[72px] tracking-[-0.4px] font-semibold w-[570px]">
              Make your business{" "}
              <span className="text-main-orange dark:text-main-yellow">
                more powerful
              </span>{" "}
              <br />
              with us
            </h1>
            <p className="text-lg !leading-[32px] w-[365px] text-main-gray dark:text-white">
              We provide various services to make
              <br className="hidden xl:inline" /> your business grow and get
              bigger. Your satisfaction is our first priority.
            </p>
            <button className="w-fit shadow-[-5px_10px_30px_rgba(76,64,247,0.5)] py-[19px] px-[35px] bg-main-purple rounded-xl">
              <span className="flex items-baseline">
                <p className="text-base font-semibold leading-[26px] text-white">
                  Get Started
                </p>
                <img
                  src="/assets/images/rightArrow.png"
                  alt="icon"
                  className="w-[20px] h-[14px] ml-4"
                />
              </span>
            </button>
          </div>

          {/* Right Section */}
          <div className="xl:w-[62%] mx-auto xl:mx-0">
            <img
              src="/assets/images/hero-section-girl-mbl.png"
              className="lg:invisibl w-full"
              alt="Girl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
