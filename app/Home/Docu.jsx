import React from "react";

function Docu() {
  return (
    <section>
      <div className={`mx-[24px] lg:mx-[70px]  xl:mx-[160px]`}>
        <div className="heading space-y-5 xl:px-4 sm:p-0 mb-[60px]">
          <h6 className="text-[#FF2D59] dark:text-main-yellow text-center text-lg xl:text-xl font-semibold">
            Our Documentation
          </h6>
          <h3 className="text-center text-[#111029] mx-auto lg:max-w-[65%] xl:max-w-[1120px] dark:text-white text-2xl xl:text-[42px] px-1 tracking-[-0.1px] font-semibold xl:leading-[56px]">
            See what our profile is like and how we work for your business
          </h3>
        </div>
      </div>
      <div className={`relative flex w-full justify-center`}>
        <img
          src="/assets/images/bg-docu-section.png"
          alt="DocSection"
          className="w-full"
        />
        <div className="flex justify-center absolute top-2 mx-[24px] lg:mx-[70px]  xl:mx-[160px]">
          <img
            src="/assets/images/video-thumbnail.png"
            alt="DocSection"
            className="w-screen"
          />
        </div>
      </div>
    </section>
  );
}

export default Docu;
