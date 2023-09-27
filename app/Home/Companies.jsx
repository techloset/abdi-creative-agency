import React from "react";

function Companies() {
  return (
    <section>
      <div className={`customersSec mx-[24px] lg:mx-[80px]  xl:mx-[160px]`}>
        <div className="heading space-y-5 xl:px-4 sm:p-0 mb-[60px]">
          <h6 className="text-[#FF2D59] dark:text-main-yellow text-center text-xl font-semibold">
            Some of Our Great Customers
          </h6>
          <h3 className="text-center text-[#111029] mx-auto max-w-[1120px] dark:text-white text-4xl xl:text-[42px] px-1 tracking-[-0.1px] font-semibold leading-[56px]">
            Some of the companies we have worked with
          </h3>
        </div>
        <div className=" md:pt-10 pb-20 lg:pb-[200px] space-y-11">
          <div
            className="grid grid-cols-1 md:grid-cols-3 md:-mt-20 lg:-mt-10 lg:grid-cols-5 sm:justify-between  
            justify-around
       lg:gap-y-[60px] lg:gap-x-20 md:gap-x-36 gap-x-auto
           space-y-11 lg:space-y-0"
          >
            <div className="grid items-end md:justify-start justify-center">
              <img
                src="/assets/images/companies/amazon.png"
                alt="image not found"
              />
            </div>
            <div className="grid justify-center">
              <img
                src="/assets/images/companies/jeep.png"
                alt="image not found"
              />
            </div>
            <div className="grid justify-center md:justify-end">
              <img
                src="/assets/images/companies/careem.png"
                alt="image not found"
              />
            </div>
            <div className="grid justify-center md:justify-start">
              <img
                src="/assets/images/companies/hubSpot.png"
                alt="image not found"
              />
            </div>
            <div className="grid justify-center lg:justify-end">
              <img
                src="/assets/images/companies/jQuery.png"
                alt="image not found"
              />
            </div>
            <div className="grid justify-center lg:justify-start md:justify-end">
              <img
                src="/assets/images/companies/canon.png"
                alt="image not found"
              />
            </div>
            <div className="grid justify-center md:justify-start">
              <img
                src="/assets/images/companies/fedex.png"
                alt="image not found"
              />
            </div>
            <div className="grid justify-center">
              <img
                src="/assets/images/companies/bitcoin.png"
                alt="image not found"
              />
            </div>
            <div className="grid justify-center md:justify-end">
              <img
                src="/assets/images/companies/pirelli.png"
                alt="image not found"
              />
            </div>
            <div className="grid justify-center lg:justify-end">
              <img
                src="/assets/images/companies/philips.png"
                alt="image not found"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgb(254,150,2)] dark:bg-[#020E2D] py-[100px] md:px-0 flex justify-between items-center px-[24px] lg:px-[80px]  xl:px-[160px]">
        <div className="w-[45px] h-[45px] bg-white dark:bg-[#212C3A] rounded-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            className="h-[20px] w-[20px]"
          >
            <path
              d="M10.5892 14.5103L9.41083 15.6886L3.82167 10.0994L9.41083 4.51025L10.5892 5.68859L7.01167 9.26609H15V10.9328H7.01167L10.5892 14.5103Z"
              className="fill-[#ABAFC7] dark:fill-white"
            />
          </svg>
        </div>
        <div className="flex flex-col text-white space-y-[44px]">
          <div className="flex justify-center">
            <img
              src="/assets/images/quotation-mark.png"
              alt="quoteMark"
              className=" shadow-testimonial-shadow"
            />
          </div>
          <div className="grid justify-center">
            <p className="text-lg md:text-2xl xl:text-[28px] xl:leading-10 font-normal px-4 text-white lg:w-[723px] text-center">
              We are serious about providing our best service to all the
              customers we help. Customers satisfaction is our number one
              priority.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-lg md:text-xl lg:text-xl text-center">
              Mark Garfield
            </p>
            <p className="text-lg md:text-xl lg:text-xl text-center">
              CEO & Head of Product
            </p>
            <img
              src="/assets/images/svg/slider.svg"
              alt=""
              className="mx-auto"
            />
          </div>
        </div>
        <img
          src="/assets/images/sliderright.png"
          alt=""
          className="w-[45px] h-[45px]"
        />
      </div>
    </section>
  );
}

export default Companies;
