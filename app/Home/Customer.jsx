import React from "react";

function Customer() {
  const list = [
    { content: "Provide idea support from our creative team" },
    { content: "Provide attractive and professional design services" },
    { content: "Support for service 24 hours a week" },
    { content: "Helping our customers to grow their business" },
    {
      content: "Provide support to market products through online marketplace",
    },
  ];

  return (
    <section>
      <div className="bg-[#F9F9FD] dark:bg-[#020E2D] py-[100px]">
        <div
          className={`mx-[24px] lg:mx-[70px]  xl:mx-[160px] flex flex-col lg:flex-row gap-y-10 space-x-10 justify-between items-center`}
        >
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-10 justify-center">
            <div className="grid gap-10 md:mt-12">
              {/* card */}
              <div className="card rounded-[20px] py-[72px] space-y-5 px-7 text-center dark:bg-[#4C40F7] bg-white">
                <h2
                  className={`text-[56px] lg:text-4xl xl:text-[56px] !leading-[72px] font-semibold text-main-purple dark:text-white`}
                >
                  70K+
                </h2>
                <p className="max-w-[214px] font-normal text-lg !leading-[32px] dark:text-[#FFFFFF] text-[#111029] opacity-70">
                  We have more than customers
                </p>
              </div>
              {/* card */}
              {/* card */}
              <div className="card rounded-[20px] py-[72px] space-y-5 px-7 text-center dark:bg-[#4C40F7] bg-white">
                <h2
                  className={`text-[56px] lg:text-4xl xl:text-[56px] !leading-[72px] font-semibold text-main-red`}
                >
                  10M+
                </h2>
                <p className="max-w-[214px] font-normal text-lg !leading-[32px] dark:text-[#FFFFFF] text-[#111029] opacity-70">
                  People who are helped because of our hard work
                </p>
              </div>
              {/* card */}
            </div>
            <div className="grid gap-10 md:mb-12">
              {/* card */}
              <div className="card rounded-[20px] py-[72px] space-y-5 px-7 text-center dark:bg-[#4C40F7] bg-white">
                <h2
                  className={`text-[56px] lg:text-4xl xl:text-[56px] !leading-[72px] font-semibold text-main-orange`}
                >
                  100+
                </h2>
                <p className="max-w-[214px] font-normal text-lg !leading-[32px] dark:text-[#FFFFFF] text-[#111029] opacity-70">
                  Projects we have completed
                </p>
              </div>
              {/* card */}
              {/* card */}
              <div className="card rounded-[20px] py-[72px] space-y-5 px-7 text-center dark:bg-[#4C40F7] bg-white">
                <h2
                  className={`text-[56px] lg:text-4xl xl:text-[56px] !leading-[72px] font-semibold text-main-green`}
                >
                  200+
                </h2>
                <p className="max-w-[214px] font-normal text-lg !leading-[32px] dark:text-[#FFFFFF] text-[#111029] opacity-70">
                  Support from world-renowned companies
                </p>
              </div>
              {/* card */}
            </div>
          </div>
          <div className="grid justify-start lg:justify-end">
            <div className="space-y-9 max-w-[460px] ">
              <h1 className="text-3xl text-[#111029] dark:text-white md:text-5xl lg:text-[56px] lg:leading-[72px] tracking-[-0.4px] font-semibold">
                Customer satisfaction is our first priority
              </h1>
              <p className="text-lg dark:text-white font-normal text-main-gray leading-[32px]">
                We serve many customers, ranging from small businesses, medium
                entrepreneurs, to world-renowned companies. Their satisfaction
                is our pleasure. We strive to provide the best service by:
              </p>
              {/* list-image tailwindcss class not working */}
              <ul
                className={`list-outside dark:text-white space-y-4 text-main-gray text-lg`}
              >
                {list.map((item, index) => (
                  <li className="flex items-center" key={index}>
                    <img
                      src="/assets/images/checkmark.png"
                      alt="Icon"
                      className="lg:w-[27px] w-5 lg:h-[27px] h-5 mr-6"
                    />
                    <p className="text-base font-normal lg:text-lg !leading-[32px]">
                      {item.content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customer;
