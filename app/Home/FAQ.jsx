"use client";
import React, { useState } from "react";

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
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, magni suscipit culpa minima incidunt, reiciendis quia fugit commodi beatae laudantium illo deserunt molestias deleniti voluptatum. Aut deleniti quae repudiandae id",
    },
    {
      uid: "three",
      q: "I come from a faraway place, can collaboration be done full time online through several meeting applications?",
      ans: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem modi cumque possimus rerum placeat, quo ab culpa, recusandae qui itaque dolore optio explicabo laudantium. Doloremque repellat fuga maxime numquam ea.!",
    },
    {
      uid: "four",
      q: "How do I get the payment complete?",
      ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, possimus nisi obcaecati harum facere reprehenderit voluptatibus aut. Labore consequuntur odio quidem eaque cum tempora ut. Molestias, facilis. Ipsa, molestias dignissimos.",
    },
    {
      uid: "five",
      q: "How long can the collaboration last?",
      ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit voluptatum neque ea ducimus ad vero pariatur a consectetur non, at nisi explicabo minus molestiae iusto sunt itaque. Aspernatur, error alias!",
    },
  ];

  const [isActive, setIsActive] = useState(["one"]);

  const accordionDropdown = ({ uid }) => {
    if (isActive.indexOf(uid) === -1) {
      setIsActive([...isActive, uid]);
    } else {
      setIsActive((p) => p.filter((item) => item !== uid));
    }
  };

  return (
    <section className="bg-sm-faq-bg sm:bg-faq-bg bg-no-repeat bg-full bg-top pb-[136px]">
      <div className="mx-[24px] lg:mx-[70px] xl:mx-[160px] lg:pt-[200px] pt-[100px]">
        <div className="heading space-y-5 xl:px-4 sm:p-0 mb-[60px]">
          <h6 className="text-[#FF2D59] dark:text-main-yellow text-center text-lg xl:text-xl font-semibold">
            Frequently Ask Question
          </h6>
          <h3 className="text-center text-[#111029] mx-auto lg:max-w-[65%] xl:max-w-[1120px] dark:text-white text-2xl xl:text-[42px] px-1 tracking-[-0.1px] font-semibold xl:leading-[56px]">
            Some of our frequently asked questions
          </h3>
        </div>

        <div
          className={`pb-16 space-y-8 ${
            isActive.length > 1
              ? "lg:pb-[100px]"
              : isActive.length == 0
              ? "lg:pb-[300px]"
              : "lg:pb-[200px]"
          } `}
        >
          {faqData.map((item, index) => (
            <div
              key={index}
              className="faq bg-white dark:bg-[#020E2D] p-8 rounded-lg border space-y-7 border-[#D8D8D8] hover:border-main-purple"
            >
              <div
                onClick={() => accordionDropdown(item)}
                className={`question flex cursor-pointer justify-between items-center ${
                  isActive?.indexOf(item.uid) > -1
                    ? "border-b-[1px] pb-7"
                    : "border-none"
                }`}
              >
                <h1 className="dark:text-white font-medium text-sm lg:text-base">
                  {item.q}
                </h1>
                <img
                  className={`w-3 h-3 ml-4 filter dark:invert cursor-pointer ${
                    isActive?.indexOf(item.uid) > -1 ? "rotate-180" : ""
                  }`}
                  src="/assets/images/down-arrow.png"
                  alt="icon"
                />
              </div>
              <div
                className={`${
                  isActive?.indexOf(item.uid) > -1 ? "block" : "hidden"
                }`}
              >
                <p className="text-[#6B6B6B] font-normal text-sm lg:text-lg lg:leading-8 dark:text-white/75">
                  {item.ans}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
