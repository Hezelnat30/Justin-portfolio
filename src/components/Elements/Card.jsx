/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Card = (props) => {
  const { children } = props;

  return <div className="card">{children}</div>;
};

const Header = (props) => {
  const { image } = props;
  return <img src={image} alt="bootstrap" className="rounded-lg" />;
};

const Body = (props) => {
  const { children, name, link } = props;
  return (
    <>
      <div className="py-4 h-full">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="font-medium text-base">{children}</p>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <button className="w-full rounded-lg bg-shades-500 hover:bg-shades-400 text-secondary py-2 font-semibold">
          Check It!
        </button>
      </a>
    </>
  );
};

Card.Header = Header;
Card.Body = Body;

export default Card;
