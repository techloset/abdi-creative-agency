"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <nav
      className={`px-6 lg:px-[70px] xl:px-[160px] h-[120px] flex justify-between items-center`}
    >
      <div className={`flex w-full md:max-w-fit justify-between items-center `}>
        <img
          src="/assets/images/logo.png"
          alt="Logo"
          className="-mb-5 shadow-btn-shadow"
        />

        <div className="md:hidden">
          <img
            src="/assets/images/menu-bar.png"
            className="w-8 dark:invert"
            onClick={handleCollapse}
            alt="mobileMenu"
          />
        </div>
      </div>
      <ul
        className={`md:hidden ${
          collapse ? "flex" : "hidden"
        }  flex-col items-center absolute right-[10%] top-20 space-y-5 bg-main-yellow px-4 py-2 rounded-lg`}
      >
        <li
          className={`text-xl leading-[140%] font-semibold text-main-purple dark:text-main-yellow hover:text-main-purple  dark:hover:text-main-yellow`}
        >
          <Link href="/"> Home</Link>
        </li>
        <li
          className={`text-xl leading-[140%] font-semibold dark:text-white  hover:text-main-purple  dark:hover:text-main-yellow`}
        >
          <Link href="/"> Works</Link>
        </li>
        <li
          className={`text-xl leading-[140%] font-semibold dark:text-white  hover:text-main-purple  dark:hover:text-main-yellow`}
        >
          <Link href="/"> About</Link>
        </li>
      </ul>
      <ul
        className={`hidden md:flex items-center md:space-x-20 space-y-10 md:space-y-0 mt-10 md:mt-0 h-screen md:h-auto md:flex-row`}
      >
        <li
          className={`text-xl leading-[140%] font-semibold text-main-purple dark:text-main-yellow hover:text-main-purple  dark:hover:text-main-yellow`}
        >
          <Link href="/"> Home</Link>
        </li>
        <li
          className={`text-xl leading-[140%] font-semibold dark:text-white  hover:text-main-purple  dark:hover:text-main-yellow`}
        >
          <Link href="/"> Works</Link>
        </li>
        <li
          className={`text-xl leading-[140%] font-semibold dark:text-white  hover:text-main-purple  dark:hover:text-main-yellow`}
        >
          <Link href="/"> About</Link>
        </li>
      </ul>
      <button
        className={`text-base bg-main-purple hidden md:block leading-[26px] font-semibold md:shadow-btn-shadow w-[160px] h-[64px] rounded-xl text-white`}
      >
        Contact us
      </button>
    </nav>
  );
}
