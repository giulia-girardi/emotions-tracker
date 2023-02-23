import React from "react";
import { Link } from "react-router-dom";

function Button({ border, background, text }) {
  return (
    <button
      className={`tracking-[0.2em]  hover:bg-light-green  font-roboto drop-shadow-3xl w-[300px] mb-3 h-10 rounded-3xl  ${
        border ? "border-2 border-green " : ""
      } ${background} `}
    >
      {" "}
      <Link to={`/${text}`} className=" text-black ">
        {text}
      </Link>
    </button>
  );
}

export default Button;
