import { Button } from "@mantine/core";
import React from "react";
import logo from "../assets/logo.svg";

function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col self-center w-2/6 p-10">
        <img src={logo} alt="Logo Track Emotions" />
        <h1 className=" font-roboto font-thin p-5">
          Track your daily <span className="bg-pink"> emotions</span>!
        </h1>
        <Button />
      </div>
    </div>
  );
}

export default Home;
