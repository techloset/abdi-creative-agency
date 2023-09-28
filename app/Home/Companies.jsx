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
          <div className="grid md:grid-cols-5 gap-[60px]  md:-mt-20 lg:-mt-10">
            <img
              src="/assets/images/companies/amazon.png"
              className="mx-auto md:mx-0"
              alt="companies"
            />
            <img
              src="/assets/images/companies/jeep.png"
              className="mx-auto md:mx-0"
              alt="companies"
            />
            <img
              src="/assets/images/companies/careem.png"
              className="mx-auto md:mx-0"
              alt="companies"
            />
            <img
              src="/assets/images/companies/hubSpot.png"
              className="mx-auto md:mx-0"
              alt="companies"
            />
            <img
              src="/assets/images/companies/jQuery.png"
              className="mx-auto md:mx-0"
              alt="companies"
            />
            <img
              src="/assets/images/companies/canon.png"
              className="mx-auto md:mx-0"
              alt="companies"
            />
            <img
              src="/assets/images/companies/fedex.png"
              className="mx-auto md:mx-0"
              alt="companies"
            />
            <img
              src="/assets/images/companies/bitcoin.png"
              className="mx-auto md:mx-0"
              alt="companies"
            />
            <img
              src="/assets/images/companies/pirelli.png"
              className="mx-auto md:mx-0"
              alt="companies"
            />
            <img
              src="/assets/images/companies/philips.png"
              className="mx-auto md:mx-0"
              alt="companies"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Companies;
