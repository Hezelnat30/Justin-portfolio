import React from "react";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <section
      id="footer"
      className="pt-2 bg-gradient-to-b from-primary to-tersier"
    >
      <div className="container font-noto relative">
        <div className="w-2/4 py-10 gap-2 mx-auto flex flex-col justify-center items-center">
          <h1 className="font-semibold uppercase text-3xl text-bonewhite">
            Justin Hezelnat
          </h1>
          <p className="text-center text-sm text-secondary font-extralight">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            blanditiis consectetur adipisci nemo voluptate illo ad perspiciatis
            praesentium?
          </p>
          <div className="flex gap-2 p-2 my-4">
            <a
              href="https://www.instagram.com/justin.hezelnat30"
              className="h-10 w-10 rounded-full bg-bonewhite flex justify-center items-center hover:bg-primary text-primary hover:text-bonewhite"
            >
              <FaInstagram className="text-2xl md:text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/justinhezekiel30"
              className="h-10 w-10 rounded-full bg-bonewhite flex justify-center items-center hover:bg-primary text-primary hover:text-bonewhite"
            >
              <FaLinkedin className="text-2xl md:text-3xl" />
            </a>
            <a
              href="https://www.tiktok.com/@sukahezelnat"
              className="h-10 w-10 rounded-full bg-bonewhite flex justify-center items-center hover:bg-primary text-primary hover:text-bonewhite"
            >
              <FaTiktok className="text-2xl md:text-3xl" />
            </a>
            <a
              href="https://www.discordapp.com/users/425664346996211713"
              className="h-10 w-10 rounded-full bg-bonewhite flex justify-center items-center hover:bg-primary text-primary hover:text-bonewhite"
            >
              <FaDiscord className="text-2xl md:text-3xl" />
            </a>
            <a
              href="https://www.youtube.com/@justinhezekiel6471"
              className="h-10 w-10 rounded-full bg-bonewhite flex justify-center items-center hover:bg-primary text-primary hover:text-bonewhite"
            >
              <FaYoutube className="text-2xl md:text-3xl" />
            </a>
          </div>
        </div>
      </div>
      <footer className="bg-primary py-4">
        <h4 className="text-center text-bonewhite">
          Copyright &copy; 2022 by Justin Hezekiel
        </h4>
      </footer>
    </section>
  );
}

export default Footer;
