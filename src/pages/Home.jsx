import React from "react";
import logo from "../assets/logo.svg";
import Button from "../components/Button";

function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col self-center w-[80%] md:w-2/6 py-20  min-w-fit ">
        <img src={logo} alt="Logo Track Emotions" />
      </div>
      <div className="flex flex-col items-center p-10">
        <p className="text-2xl font-roboto font-thin pt-5">
          Track your daily{" "}
          <span className="bg-pink  font-light tracking-[0.1em]">
            {" "}
            emotions
          </span>
          !
        </p>
        <Button border={true} text="SignUp" background="bg-[#fcfcfc]" />
        <Button border={false} background="bg-green" text="Login" />
      </div>
    </div>
  );
}

export default Home;
