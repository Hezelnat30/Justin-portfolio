import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Modal from "./Elements/Modal";

export default function Hero() {
  const [HandleModal, setHandleModal] = useState(false);

  const toggleModal = () => {
    setHandleModal(!HandleModal);
  };

  useEffect(() => {
    const body = document.body;

    HandleModal
      ? body.classList.add("overflow-y-hidden")
      : body.classList.remove("overflow-y-hidden");
  });

  const downloadCV = () => {
    window.location.href = "/CV Internship Justin.pdf";
  };

  // const modalAnimation = useSpring({});

  const TypeWriter = () => {
    return (
      <TypeAnimation
        sequence={[
          "a Web Developer",
          1200,
          "a Guitarist",
          1200,
          "Justin Hezekiel",
          1200,
        ]}
        wrapper="span"
        speed={60}
        repeat={1}
        style={{ color: "#041320" }}
      />
    );
  };
  return (
    <section id="hero" className="pt-4 lg:pt-32 pb-32 mt-14 md:mt-14">
      <div className="container">
        <div className="lg:flex relative">
          <div className="absolute top-28 md:-top-8 md:left-20 w-72 h-72 md:w-82 md:h-82 bg-[#57A1DE] rounded-full opacity-20 md:opacity-45 blur-2xl md:blur-3xl animate-blobright -z-10"></div>
          <div className="absolute md:-bottom-20 md:right-14 w-52 h-52 md:w-64 md:h-64 bg-[#E53C69] rounded-full opacity-25 bottom-10 right-5 md:opacity-40 blur-2xl md:blur-3xl animate-blobleft -z-10 animation-delay-1000"></div>
          <div className="w-full mt-8 px-4 lg:w-2/3 font-noto text-center lg:text-end">
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E53C69] to-[#57A1DE] tracking-tight">
                Hi! I&apos;m{" "}
              </span>
              <br />
              <TypeWriter />
            </h1>
            <p className="mb-4 text-xl md:text-2xl text-slate-500">
              I&apos;m a Passionate Web Developer who specifically works as a{" "}
              <i className="text-primary">Front-End Developer</i>, and this is
              my portfolio created using{" "}
              <span className="text-yellow-500">Vite</span>,{" "}
              <span className="text-[#087ea4]">React</span> and{" "}
              <span className="text-teal-500">Tailwindcss</span>.
            </p>
            <div className="flex my-6 flex-wrap justify-center lg:justify-end gap-3">
              <button
                className="px-4 py-2 w-2/3 md:w-fit relative border-4 border-[#62a8ad] rounded-full overflow-hidden font-semibold bg-transparent transition duration-200 z-10 text-bonewhite button-about"
                onClick={toggleModal}
              >
                About Me
              </button>
              <Modal isOpen={HandleModal} onClose={toggleModal}>
                <Modal.Header title={"Justin Hezekiel"} />
                <Modal.Body>
                  {" "}
                  Hello! My name is Justin Hezekiel Ramli. I was born in
                  Semarang and I love eat, music, sports, and playing games.
                </Modal.Body>
              </Modal>
              <button
                className="px-4 py-2 w-2/3 md:w-fit relative border-4 border-[#62a8ad] rounded-full overflow-hidden font-semibold bg-transparent transition duration-300 z-10 button-download text-tersier"
                onClick={downloadCV}
              >
                Download CV
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-10 flex lg:justify-start">
            <div className="border-8 rounded-full relative w-74 h-74 border-gray-400 mx-auto">
              <div className="bg-primary rounded-full w-64 h-64 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img
                  src="/images/justinbg.png"
                  alt="justin"
                  className="w-[300px] absolute right-0 top-0 transform -translate-y-[5%] scale-130"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
