import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { animated, useSpring } from "react-spring";
import "tailwindcss/tailwind.css";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const menuAnimation = useSpring({
    transform: !nav ? "rotate(0deg)" : "rotate(-90deg)",
  });

  const [fixedNavbar, setFixedNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      setFixedNavbar(window.scrollY > fixedNav);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarWeb = `bg-primary shadow-lg absolute top-0 left-0 right-0 flex ${
    fixedNavbar ? "navbar-fixed" : ""
  }`;

  const navbarMobile = `bg-primary text-secondary shadow-md w-[60%] fixed lg:hidden left-0 top-0  border-r border-r-gray-600 h-full transition ease-in-out z-50 duration-500 ${
    nav ? `scale-100 origin-top-left` : `scale-0 origin-top-left opacity-0`
  }`;

  return (
    <header className={navbarWeb}>
      <div className="container">
        <div className="flex items-center max-w-[1240px] justify-between font-noto mx-auto px-2">
          <div className="p-4 w-full">
            <h4 className="text-bonewhite text-3xl">Hezelnat</h4>
          </div>
          <div className="p-4">
            <nav>
              <ul className="hidden md:flex text-bonewhite">
                <li className="group px-4">
                  <a href="#hero" className="menu">
                    Home
                  </a>
                </li>
                <li className="group px-4">
                  <a href="#about" className="menu">
                    About
                  </a>
                </li>
                <li className="group px-4">
                  <a href="#portfolio" className="menu">
                    Portfolio
                  </a>
                </li>
                <li className="group px-4">
                  <a href="#contact" className="menu">
                    Contact
                  </a>
                </li>
              </ul>

              <div onClick={handleNav} className="block md:hidden">
                <animated.div style={menuAnimation}>
                  {nav ? (
                    <AiOutlineClose size={30} className="text-secondary" />
                  ) : (
                    <AiOutlineMenu size={30} className="text-secondary" />
                  )}
                </animated.div>
              </div>
              <div className={navbarMobile}>
                <div className="w-full px-10 mt-4">
                  <h4 className="text-kuning text-3xl ">Hezelnat</h4>
                </div>
                <ul className="pt-16 p-6 uppercase divide-y-3 text-kuning">
                  <li className="group p-4">
                    <a
                      href="#hero"
                      className="text-lg py-2 transition ease-in-out duration-100 font-light group-hover:text-[#ffd900]"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group p-4">
                    <a
                      href="#about"
                      className="text-lg group-hover:text-[#ffd900] py-2 font-light transition ease-in-out duration-100"
                    >
                      About
                    </a>
                  </li>
                  <li className="group p-4">
                    <a
                      href="#portfolio"
                      className="text-lg group-hover:text-[#ffd900] py-2 font-light transition ease-in-out duration-100"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="group p-4">
                    <a
                      href="#contact"
                      className="text-lg group-hover:text-[#ffd900] py-2 font-light transition ease-in-out duration-100"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
