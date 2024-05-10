import axios from "axios";
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const timestamp = new Date().toLocaleString();

    const data = {
      Timestamp: timestamp,
      Name: name,
      Email: email,
      Message: message,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/fe00c7ba-33bb-410e-a97c-d94118fe8d2e",
        data
      )
      .then((response) => {
        console.log(response);
        // Clearing Form
        setName("");
        setEmail("");
        setMessage("");
      });
  };

  return (
    <section id="contact" className="pt-32 pb-32">
      <div className="container relative font-noto">
        <div className="absolute -top-36 md:-top-32 md:-left-4 w-52 h-52 md:w-72 md:h-72 bg-[#57A1DE] rounded-full opacity-20 md:opacity-45 blur-2xl md:blur-3xl animate-blobright -z-10"></div>
        <div className="absolute -bottom-14 right-5 md:-bottom-20 md:right-16 w-48 h-48 md:w-60 md:h-60 bg-[#E53C69] rounded-full opacity-20 md:opacity-40 blur-2xl md:blur-3xl animate-blobleft -z-10 animation-delay-1000"></div>
        <div className="w-full px-4 text-center pb-12">
          <h1 className="uppercase text-4xl lg:text-5xl font-extrabold text-tersier">
            Contact
          </h1>
          <p className="font-bold text-base md:text-lg p-2 italic text-slate-600 tracking-wide">
            Submit the form to get in touch with me!
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-full px-8 md:w-3/5 mx-auto">
            <div className="w-full mb-10 relative">
              <input
                type="text"
                id="name"
                className="peer w-full text-tersier rounded-md bg-secondary mt-2 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-shades-500 focus:border-shades-500 shadow placeholder-transparent"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-6 font-semibold peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4
                peer-focus:-top-6 peer-focus:text-base peer-focus:left-0 peer-focus:text-tersier transition-all"
              >
                Name
              </label>
            </div>
            <div className="w-full mb-10 relative">
              <input
                type="email"
                id="email"
                className="peer w-full text-tersier rounded-md bg-secondary mt-2 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-shades-500 focus:border-shades-500 shadow placeholder-transparent"
                placeholder="Example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-6 font-semibold peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:left-4
                peer-focus:-top-6 peer-focus:text-base peer-focus:left-0 peer-focus:text-tersier transition-all"
              >
                Email
              </label>
            </div>
            <div className="w-full mb-4 md:mb-6">
              <label htmlFor="message" className="text-base font-bold">
                Message
              </label>
              <textarea
                type="message"
                id="message"
                className="w-full text-tersier rounded-md bg-secondary mt-2 px-4 py-2 h-52 md:h-64 focus:outline-none focus:ring-1 focus:ring-shades-500 focus:border-shades-500 shadow"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>
            <div className="w-full px-4 flex justify-center">
              <button
                className="w-full md:w-5/12 px-4 py-2 bg-shades-500 text-bonewhite font-semibold rounded-md hover:scale-[.97] hover:bg-shades-400 transition ease-in-out"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
