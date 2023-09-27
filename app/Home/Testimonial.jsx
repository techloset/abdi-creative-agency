import React from "react";

function Testimonial() {
  const testimonialsData = [
    {
      imgURL: "/assets/images/Ronald.png",
      name: "Ronald Richards",
      company: "Google inc.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      rating: 5,
      shadow: "shadow-testimonial-shadow",
    },
    {
      imgURL: "/assets/images/Hawkins.png",
      name: "Guy Hawkins",
      company: "Paypal inc.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      rating: 5,
    },
    {
      imgURL: "/assets/images/Kristin.png",
      name: "Kristin Watson",
      company: "Microsoft inc.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      rating: 5,
    },
    {
      imgURL: "/assets/images/Robert.png",
      name: "Robert Fox",
      company: "Facebook inc.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      rating: 5,
    },
    {
      imgURL: "/assets/images/Savannah.png",
      name: "Savannah Nguyen",
      company: "Twitter inc.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      rating: 5,
    },
    {
      imgURL: "/assets/images/Courtney.png",
      name: "Courtney Henry",
      company: "Apple inc.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
      rating: 5,
    },
  ];

  return (
    <section>
      <div
        className={`testimonialSec py-[100px] dark:bg-[#020E2D] bg-[#F9F9FD]`}
      >
        <div className={`mx-[24px] lg:mx-[80px]  xl:mx-[160px]`}>
          <div className="heading space-y-5 xl:px-4 sm:p-0 mb-[60px]">
            <h6 className="text-[#FF2D59] text-center text-xl font-semibold">
              Testimonials
            </h6>
            <h3
              className="text-center text-[#111029] dark:text-white text-xl md:text-2xl lg:text-4xl xl:text-[42px]
         px-1 tracking-[-0.1px]  font-semibold lg:leading-[56px]"
            >
              Some testimonials from our customers
            </h3>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}
          >
            {testimonialsData.map((item, index) => {
              const { imgURL, name, company, desc, rating } = item;
              const items = [];
              for (let i = 0; i < rating; i++) {
                items.push(
                  <div key={i}>
                    <img
                      src="/assets/images/ratingStar.png"
                      alt="star"
                      className="w-4 lg:w-3 xl:w-4 h-4 lg:h-3 xl:h-4"
                    />
                  </div>
                );
              }
              return (
                <div className="pt-14 flex justify-center" key={index}>
                  <div
                    className={`tesimonialCard flex text-center max-w-[352px] flex-col items-center px-8 pb-11 scroll-pt-6 rounded-[20px] shadow-xl ${item.shadow} dark:bg-[#00113B] bg-white space-y-6`}
                    key={index} // also add key prop here
                  >
                    <img
                      src={imgURL}
                      alt="testimonial"
                      className={`-mt-14 rounded-full shadow-2xl `}
                    />
                    <div className="flex flex-col dark:text-white space-y-2 items-center">
                      <h1 className="text-2xl lg:text-lg xl:text-2xl font-semibold">
                        {name}
                      </h1>
                      <strong className="text-base font-medium dark:text-white text-[#ABAFC7]">
                        {company}
                      </strong>
                    </div>
                    <p className="text-lg leading-[32px] lg:text-base xl:text-lg xl:leading-[32px] font-normal dark:text-white text-[#70798B]">
                      {desc}
                    </p>
                    <div className="rating flex space-x-2.5">{items}</div>
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

export default Testimonial;
