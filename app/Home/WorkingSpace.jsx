import React from "react";

function WorkingSpace() {
  return (
    <section>
      <div
        className={`servicesSection relative lg:pb-[200px] pb-[100px] pt-[200px] bg-bottom`}
      >
        <img
          src="/assets/images/curve.png"
          alt="curve"
          className="w-full absolute -z-40 top-56"
        />
        <img
          src="/assets/images/curve.png"
          alt="curve"
          className="w-full absolute -z-40 -bottom-80
            "
        />
        <div className={`mx-[24px] lg:mx-[70px]  xl:mx-[160px]`}>
          <div className="heading space-y-5 xl:px-4 sm:p-0 mb-[60px]">
            <h6 className="text-[#FF2D59] dark:text-main-yellow text-center text-lg xl:text-xl font-semibold">
              Working space
            </h6>
            <h3 className="text-center text-[#111029] mx-auto lg:max-w-[65%] xl:max-w-[1120px] dark:text-white text-2xl xl:text-[42px] px-1 tracking-[-0.1px] font-semibold xl:leading-[56px]">
              Let’s meet our interior room decoration
            </h3>
          </div>
        </div>
        <div className={`mt-10`}>
          <div className="mx-[24px] lg:mx-[70px] xl:mx-[160px] gap-8 grid grid-cols-1 md:grid-cols-3">
            <div className="space-y-8">
              <img
                src="/assets/images/frontWorking.png"
                className="w-full"
                alt="image not found"
              />
              <img
                src="/assets/images/guestRest.png"
                className="w-full"
                alt="image not found"
              />
            </div>
            <div className="space-y-8">
              <img
                src="/assets/images/meetingCorner.png"
                className="w-full"
                alt="image not found"
              />
              <img
                src="/assets/images/singleWorking.png"
                className="w-full"
                alt="image not found"
              />
            </div>
            <div className="space-y-8">
              <img
                src="/assets/images/guestMeeting.png"
                className="w-full"
                alt="image not found"
              />
              <img
                src="/assets/images/kitchen.png"
                className="w-full"
                alt="image not found"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkingSpace;
