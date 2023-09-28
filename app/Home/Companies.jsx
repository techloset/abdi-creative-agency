import React from "react";

function Companies() {
  return (
    <section>
      <div className={`customersSec mx-[24px] lg:mx-[70px]  xl:mx-[160px]`}>
        <div className="heading space-y-5 xl:px-4 sm:p-0 mb-[60px]">
          <h6 className="text-[#FF2D59] dark:text-main-yellow text-center text-lg xl:text-xl font-semibold">
            Some of Our Great Customers
          </h6>
          <h3 className="text-center text-[#111029] mx-auto lg:max-w-[65%] xl:max-w-[1120px] dark:text-white text-2xl xl:text-[42px] px-1 tracking-[-0.1px] font-semibold xl:leading-[56px]">
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
    </section>
  );
}

export default Companies;
