// eslint-disable-next-line no-unused-vars
import React from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";

export default function Preloader() {
  return (
    <div className="preloader-container">
      <div className="flex justify-center items-center">
        <CgSpinnerTwoAlt className="w-16 h-16 text-bonewhite animate-spin" />
      </div>
    </div>
  );
}
