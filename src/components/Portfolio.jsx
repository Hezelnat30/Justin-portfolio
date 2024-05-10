/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "./Elements/Card";

const cards = [
  {
    id: 1,
    name: "Bootstrap",
    image: "/portfolio/bootstrap.png",
    description: `. Magnam
    quam sunt praesentium quae qui.`,
    link: "https://hezelnat30.github.io/",
  },
  {
    id: 2,
    name: "Laravel 10+",
    image: "/portfolio/laravel.png",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quasi quo officia provident excepturi debitis a repudiandae.`,
  },
  {
    id: 3,
    name: "Management System",
    image: "/portfolio/prbk.png",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
    quam sunt praesentium quae qui.`,
    link: "https://prbk.giapringgading.org/",
  },
  {
    id: 4,
    name: "TailwindCSS",
    image: "/portfolio/justintailwind.png",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, suscipit.`,
    link: "https://hezelnat30.github.io/justin-tailwind/public/index.html",
  },
  {
    id: 5,
    name: "OOP Native PHP",
    image: "/portfolio/justinphp.png",
    description: `Lorem ipsum dolor sit amet consectetur. Non est nihil cumque doloribus obcaecati sit aspernatur dolore quibusdam!`,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-40 lg:pt-34 pb-40 px-2">
      <div className="container font-noto relative">
        <div className="absolute top-8 md:-top-8 md:left-20 w-72 h-72 md:w-82 md:h-82 bg-[#57A1DE] rounded-full opacity-15 md:opacity-40 blur-2xl md:blur-3xl animate-blobright -z-10"></div>
        <div className="absolute md:-bottom-20 md:right-14 w-52 h-52 md:w-64 md:h-64 bg-[#E53C69] rounded-full opacity-25 -bottom-12 right-5 md:opacity-40 blur-2xl md:blur-3xl animate-blobleft -z-10 animation-delay-1000"></div>
        <div className="w-full text-center pb-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-tersier uppercase">
            Portfolio
          </h2>
          <p className="text-base md:text-lg font-bold text-slate-600 italic p-2 tracking-wide">
            Check my portfolio!
          </p>
        </div>
        <div className="flex flex-wrap justify-center mx-auto gap-6">
          {cards.map((card) => (
            <Card key={card.id}>
              <Card.Header image={card.image} />
              <Card.Body name={card.name} link={card.link}>
                {card.description}
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
