/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const body = document.body;

    isOpen
      ? body.classList.add("overflow-y-hidden")
      : body.classList.remove("overflow-y-hidden");
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-[rgba(50,50,50,.7)]"
            onClick={onClose}
          ></div>
          <div className="animate-popup absolute left-1/2 top-1/4 md:top-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary shadow px-2 md:px-6 py-4 w-3/4 md:w-1/4 z-40 rounded-xl font-inter">
            {children}
            <button
              className="absolute -top-9 -right-5 px-2 py-2 rounded-full mt-5 bg-primary"
              onClick={onClose}
            >
              <FaTimes className="text-2xl text-bonewhite" />
            </button>
          </div>
        </>
      )}
    </>
  );
};

const Header = (props) => {
  const { title } = props;
  return (
    <h1 className="text-tersier text-center text-2xl font-bold">{title}</h1>
  );
};

const Body = (props) => {
  const { children } = props;
  return (
    <p
      className="text-tersier p-4 font-semibold"
      style={{ textAlign: "justify" }}
    >
      {children}
    </p>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

Modal.Header = Header;
Modal.Body = Body;

export default Modal;
