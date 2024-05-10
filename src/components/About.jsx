// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  FaDatabase,
  FaDiscord,
  FaInstagram,
  FaLaptopCode,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { GiPodiumWinner } from "react-icons/gi";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { MdCastForEducation, MdDesignServices } from "react-icons/md";

export default function About() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section id="about" className="pt-40 lg:pt-34 mt-20 pb-40 px-3">
      <div className="container rounded-xl py-12 md:w-[85%] shadow-2xl bg-secondary font-noto relative">
        <div className="absolute -top-36 md:-top-32 md:-left-8 w-72 h-72 md:w-82 md:h-82 bg-[#57A1DE] rounded-full opacity-25 md:opacity-45 blur-2xl md:blur-3xl animate-blobright -z-10"></div>
        <div className="absolute -bottom-14 right-5 md:-bottom-20 md:-right-10 w-52 h-52 md:w-64 md:h-64 bg-[#E53C69] rounded-full opacity-20 md:opacity-40 blur-2xl md:blur-3xl animate-blobleft -z-10 animation-delay-1000"></div>
        <div className="w-full text-center py-4">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-tersier md:pt-6 lg:pt-0">
            ABOUT
          </h1>
          <p className="font-bold italic text-base md:text-lg text-slate-600 p-2 tracking-wide">
            Stay Humble, Stay Positive & StayCation!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-6 mb-2">
          <div className="w-2/4 hidden lg:flex justify-end items-center">
            <div className="bg-primary border-5 border-white rounded-full w-82 h-82 z-10 relative">
              <img
                src="/images/justin2.png"
                alt="justin"
                className="w-full absolute right-0 top-0 transform"
              />
            </div>
          </div>
          <div className="w-full lg:mt-0 lg:w-3/4 lg:pe-24 py-5 flex flex-col">
            <ul>
              <li className="group">
                <div className="flex w-full rounded-lg transition duration-300 bg-no-repeat bg-gradient-to-r from-[rgba(165,215,232,.4)] to-[rgba(255,255,255,.1)] bg-[length:100%_0%] group-hover:bg-[length:100%_100%] items-center px-2">
                  <MdCastForEducation className="w-1/4 flex items-center text-6xl md:text-7xl" />
                  <div className="py-3 px-2 lg:pe-2 w-full">
                    <h3 className="text-xl uppercase font-bold">About Me</h3>
                    <p
                      style={{ textAlign: "justify" }}
                      className="font-medium justify-center"
                    >
                      Hi! my name is Justin Hezekiel Ramli, you can call me
                      Justin. I was born in Semarang on 4 May 2003.
                    </p>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex w-full rounded-lg transition duration-300 bg-no-repeat bg-gradient-to-r from-[rgba(165,215,232,.4)] to-[rgba(255,255,255,.1)] bg-[length:100%_0%] group-hover:bg-[length:100%_100%] items-center px-2">
                  <FaGraduationCap className="w-1/4 flex items-center text-5xl md:text-6xl" />
                  <div className="py-3 px-2 lg:pe-2 w-full">
                    <h3 className="text-xl uppercase font-bold">Education</h3>
                    <p style={{ textAlign: "justify" }} className="font-medium">
                      I&apos;m a student and currently Studying at{" "}
                      <a href="https://www.unika.ac.id/">
                        <span className="text-indigo-600">
                          Soegijapranata Catholic University
                        </span>
                      </a>{" "}
                      Majoring Information Systems.
                    </p>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex w-full rounded-lg transition duration-300 bg-no-repeat bg-gradient-to-r from-[rgba(165,215,232,.4)] to-[rgba(255,255,255,.1)] bg-[length:100%_0%] group-hover:bg-[length:100%_100%] items-center px-2">
                  <GiPodiumWinner className="w-1/4 flex items-center text-6xl md:text-7xl" />
                  <div className="py-3 px-2 lg:pe-2 w-full">
                    <h3 className="text-xl uppercase font-bold">Experience</h3>
                    <p style={{ textAlign: "justify" }} className="font-medium">
                      I&apos;m front-end developer. But I have also worked with
                      Laravel, and this my first{" "}
                      <span className="font-bold">
                        React + Vite + Tailwind Portfolio.
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full justify-center max-w-2xl flex-wrap pt-10 flex gap-2 mx-auto">
          <a
            href="https://www.instagram.com/justin.hezelnat30"
            className="h-14 w-14 rounded-full bg-bonewhite flex justify-center items-center hover:bg-primary text-primary hover:text-bonewhite"
          >
            <FaInstagram className="text-3xl md:text-4xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/justinhezekiel30"
            className="h-14 w-14 rounded-full bg-bonewhite flex justify-center items-center hover:bg-primary text-primary hover:text-bonewhite"
          >
            <FaLinkedin className="text-3xl md:text-4xl" />
          </a>
          <a
            href="https://www.tiktok.com/@sukahezelnat"
            className="h-14 w-14 rounded-full bg-bonewhite flex justify-center items-center hover:bg-primary text-primary hover:text-bonewhite"
          >
            <FaTiktok className="text-3xl md:text-4xl" />
          </a>
          <a
            href="https://www.discordapp.com/users/425664346996211713"
            className="h-14 w-14 rounded-full bg-bonewhite flex justify-center items-center hover:bg-primary text-primary hover:text-bonewhite"
          >
            <FaDiscord className="text-3xl md:text-4xl" />
          </a>
          <a
            href="https://www.youtube.com/@justinhezekiel6471"
            className="h-14 w-14 rounded-full bg-bonewhite flex justify-center items-center hover:bg-primary text-primary hover:text-bonewhite"
          >
            <FaYoutube className="text-3xl md:text-4xl" />
          </a>
        </div>
        <IoIosArrowDropdownCircle
          className="text-6xl text-primary bg-bonewhite hover:bg-primary hover:text-bonewhite rounded-full cursor-pointer absolute -bottom-7 left-1/2 -translate-x-1/2 z-10 transition-all duration-150 ease-in-out"
          onClick={toggleMenu}
        />
      </div>
      <div
        className={`md:w-[85%] mx-auto grid py-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-primary rounded-xl shadow-2xl font-noto transition-all ease-in-out duration-300 ${
          showMenu
            ? "opacity-100 translate-y-0 h-full"
            : "opacity-0 -translate-y-1/3 h-0"
        }`}
      >
        <div className="w-74 shadow-lg px-4 rounded-lg py-6 bg-bonewhite m-3 text-center mx-auto">
          <FaLaptopCode className="text-blue-400 text-center mx-auto text-9xl" />
          <div className="p-6 text-center divide-y-2 divide-gray-300">
            <h4 className="font-bold text-lg md:text-xl mb-6 uppercase">
              Programming
            </h4>
            <p className="text-gray-600 text-base py-2">PHP</p>
            <p className="text-gray-600 text-base py-2">Javascript</p>
            <p className="text-gray-600 text-base py-2">C++</p>
          </div>
        </div>
        <div className="w-74 shadow-lg px-4 rounded-lg py-6 bg-bonewhite m-3 text-center mx-auto">
          <MdDesignServices className="text-red-400 text-center mx-auto text-9xl" />
          <div className="p-6 text-center divide-y-2 divide-gray-300">
            <h4 className="font-bold text-lg md:text-xl mb-6 uppercase">
              Design
            </h4>
            <p className="text-gray-600 text-base py-2">UI/UX</p>
            <p className="text-gray-600 text-base py-2">Mobile</p>
            <p className="text-gray-600 text-base py-2">CSS</p>
          </div>
        </div>
        <div className="w-74 shadow-lg px-4 rounded-lg py-6 bg-bonewhite m-3 text-center mx-auto">
          <FaDatabase className="text-green-600 text-center mx-auto text-9xl" />
          <div className="p-6 text-center divide-y-2 divide-gray-300">
            <h4 className="font-bold text-lg md:text-xl mb-6 uppercase">
              Database
            </h4>
            <p className="text-gray-600 text-base py-2">MySQL</p>
            <p className="text-gray-600 text-base py-2">SQL Server</p>
            <p className="text-gray-600 text-base py-2">MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
}
