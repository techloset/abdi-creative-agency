import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      {/* start new project */}
      <div className={`topSection relative dark:bg-[#00113B] z-10`}>
        <img
          src="/assets/images/curve.png"
          alt="curve"
          className="w-full absolute top-36 -z-10"
        />
        <img
          src="/assets/images/curve.png"
          alt="curve"
          className="w-full absolute -bottom-6 -z-10"
        />
        <div className="mx-[24px] lg:mx-[80px] xl:mx-[160px] py-[100px] lg:py-[200px]">
          <div className="rounded-[20px] text-white bg-main-yellow text-center pt-16 pb-[84px]">
            <p className="pb-2 md:pb-3 xl:pb-4 text-sm md:text-base font-medium">
              Are You Ready For
            </p>
            <h1 className="pb-4 md:pb-6 xl:pb-8 text-[21px] md:text-8 xl:text-[42px] leading-7 xl:leading-[56px] font-semibold">
              Start a New Project
            </h1>
            <div className="flex justify-center">
              <button
                className={`shadow-2xl shadow-main-red/50 md:max-w-fit py-[19px] px-[42.5px] bg-[#4C40F7] rounded-xl `}
              >
                <span className="flex items-center">
                  <p className="text-base font-semibold leading-[26px] text-white">
                    Start Now
                  </p>
                  <img
                    src="/assets/images/rightArrow.png"
                    alt="icon"
                    className="w-[20px] h-[14px] ml-4"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* start a new project */}
        <div className="bg-[#00113B] mt-40">
          <div className="mx-[24px] lg:mx-[80px] xl:mx-[160px] text-white relative pt-40">
            {/* Subscribe section */}
            <div className="w-full mx-auto absolute -top-40">
              <div className="text-center rounded-[20px]  bg-[#4C40F7] pt-[60px] pb-[80px]">
                <p className="pb-2 md:pb-3 xl:pb-4 text-sm md:text-base font-medium">
                  Get Notified About Project
                </p>
                <h1 className="pb-4 md:pb-6 xl:pb-8 text-[21px] md:text-8 xl:text-[42px] leading-7 xl:leading-[56px] font-semibold">
                  Subscribe Now
                </h1>
                <div className="flex justify-center">
                  <div className="flex justify-center text-black/75 items-center w-fit relative">
                    <input
                      type="email"
                      placeholder="Email"
                      className="py-5 pl-7 pr-14 rounded-[11px] text-lg bg-white dark:bg-main-bg leading-[32px] font-normal mx-5 md:w-[500px] w-full "
                    />
                    <img
                      src="/assets/images/send-icon.png"
                      alt="send-icon"
                      className="w-[19px] h-[18px] absolute right-12"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="grid grid-cols-1  gap-x-16 justify-between lg:grid-cols-10 mt-20 pb-11">
              <div className="col-span-4">
                <img
                  src="/assets/images/logo.png"
                  alt="Logo"
                  className="shadow-btn-shadow h-12 w-12 mb-12"
                />
                <p className="text-base max-w-[365px] font-medium opacity-75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="col-span-4 ">
                <h2 className="text-xl font-semibold mb-8">Our Office</h2>
                <img
                  src="/assets/images/world-map.png"
                  alt="map"
                  className="w-full"
                />
              </div>
              <div className="col-span-2 ">
                <h2 className="text-xl mb-8">Contact</h2>
                <div className="space-y-5 opacity-75">
                  <p className="text-base font-medium">
                    Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta
                  </p>
                  <p className="text-base font-medium">info@yourdomain .com</p>
                  <div>
                    <Link href={`tel:+92 332 9777119`}>
                      <p className="text-base font-medium">
                        +62 (0) 000 0000 00
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* line*/}
            <hr className="border-[1px] mb-16 lg:mb-11"></hr>
            {/* copy right section */}
            <div className="flex lg:flex-row text-[#ABAFC7] flex-col justify-center lg:justify-between pb-[60px] text-base font-medium items-center">
              <p className="">© 2021 Creative Agency</p>
              <ul className="flex space-x-4 lg:space-x-9">
                <li>
                  <Link href={"#"}>Home</Link>
                </li>
                <li>
                  <Link href={"#"}>Work</Link>
                </li>
                <li>
                  <Link href={"#"}>About</Link>
                </li>
                <li>
                  <Link href={"#"}>Pricing</Link>
                </li>
                <li>
                  <Link href={"#"}>Contact</Link>
                </li>
              </ul>
              <div className="flex space-x-[20px]">
                <Link href={"#"}>
                  <img src="/assets/images/fb.png" alt="fb" />
                </Link>
                <Link href={"#"}>
                  <img src="/assets/images/instagram.png" alt="instagram" />
                </Link>
                <Link href={"#"}>
                  <img src="/assets/images/linkedin.png" alt="linkedin" />
                </Link>
                <Link href={"#"}>
                  <img src="/assets/images/twitter.png" alt="twitter" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
