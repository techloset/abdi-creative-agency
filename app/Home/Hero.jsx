import React from "react";

function Hero() {
  return (
    <section>
      <div className="heroSection bg-cover bg-top lg:bg-hero-img pb-[100px] lg:pb-[200px] bg-no-repeat bg-none">
        <div className="mx-[24px] lg:mx-[70px] xl:ms-[160px] xl:me-10">
          <div className="flex flex-wrap lg:flex-nowrap xl:justify-between items-center">
            {/* Left Section */}
            <div className="text gap-y-6 flex flex-col dark:text-white order-2 md:order-none">
              <h1 className="text-3xl md:text-3xl xl:text-[56px] xl:!leading-[72px] tracking-[-0.4px] font-semibold lg:w-[370px] xl:max-w-[570px] xl:w-[570px] lg:-mr-40">
                Make your business{" "}
                <span className="text-main-orange dark:text-main-yellow">
                  more powerful
                </span>{" "}
                <br className="hidden xl:block" />
                with us
              </h1>
              <p className="text-sm xl:text-lg !leading-normal xl:!leading-[32px] lg:w-[370px] xl:max-w-[365px] xl:w-[365px] text-main-gray dark:text-white">
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
            <div className="mx-auto xl:mx-0 order-1 md:order-none">
              <img
                src="/assets/images/hero-section-girl-mbl.png"
                className="w-full"
                alt="Girl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
