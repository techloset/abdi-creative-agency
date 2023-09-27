import React from "react";

function FAQ() {
  const faqData = [
    {
      uid: "one",
      q: "What are the services provided to customers?",
      ans: "Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.",
    },
    {
      uid: "two",
      q: "How can I submit a proposal for cooperation?",
    },
    {
      uid: "three",
      q: "I come from a faraway place, can collaboration be done full time online through several meeting applications?",
    },
    {
      uid: "four",
      q: "How do I get the payment complete?",
    },
    {
      uid: "five",
      q: "How long can the collaboration last?",
    },
  ];
  return (
    <section>
      <div
        className={`bg-sm-faq-bg sm:bg-faq-bg bg-no-repeat bg-full bg-top pb-[136px]`}
      >
        <div
          className={`mx-[24px] lg:mx-[80px] xl:mx-[160px] lg:pt-[200px] pt-[100px]`}
        >
          <div className="heading space-y-5 xl:px-4 sm:p-0 mb-[60px]">
            <h6 className="text-[#FF2D59] dark:text-main-yellow text-center text-xl font-semibold">
              Frequently Ask Question{" "}
            </h6>
            <h3 className="text-center text-[#111029] mx-auto max-w-[1120px] dark:text-white text-4xl xl:text-[42px] px-1 tracking-[-0.1px] font-semibold leading-[56px]">
              Some of our frequently asked questions{" "}
            </h3>
          </div>
          <div className={`pb-16 space-y-8`}>
            {faqData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`bg-white dark:bg-[#020E2D] p-8 rounded-lg border ${
                    item.uid === "one" ? "space-y-7" : ""
                  } border-[#D8D8D8] hover:border-main-purple`}
                >
                  <div
                    className={`question flex cursor-pointer justify-between items-center`}
                  >
                    <h1 className="dark:text-white text-main-gray font-medium text-sm lg:text-base">
                      {item.q}
                    </h1>
                    <img
                      className={`w-3 h-3 dark:invert cursor-pointer `}
                      src="/assets/images/down-arrow.png"
                      alt="icon"
                    />
                  </div>
                  {item.uid === "one" ? <hr className="w-full mx-auto" /> : ""}
                  <div>
                    <p className="text-main-gray font-normal text-sm lg:text-lg lg:leading-8 dark:text-white">
                      {item.ans}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
