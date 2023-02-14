import React, { useContext, useState } from "react";
import EmotionsTable from "../components/EmotionsTable";
import LogEmotionsModal from "../components/LogEmotionsModal";
import { UserAuthContext } from "../contexts/user.auth.context";

/* import TodayFeeling from "../components/TodayFeeling"; */

function Dashboard() {
  const { user } = useContext(UserAuthContext);
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {user && (
        <div className="flex flex-col items-center">
          <h1 className=" text-dark-green  font-roboto text-6xl pb-10">
            Hello{" "}
            <strong className="">
              {" "}
              {user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)}
            </strong>
            !
          </h1>
          <div className="w-5/6 md:w-3/6  drop-shadow-3xl  bg-light-green  rounded-xl p-10 m-10">
            {" "}
            <h1 className=" font-playfair text-xl">
              How are you feeling today? 🤔
            </h1>
          </div>
          <div className="w-5/6  md:w-3/6 drop-shadow-3xl bg-white border-2 border-solid border-green  rounded-xl p-10">
            {" "}
            <EmotionsTable width="50px" />
          </div>
        <button onClick={() => setShowModal(true)} >Log emotions</button>
        <LogEmotionsModal showModal={showModal} setShowModal={setShowModal}/>
        </div>
      )}
    </>
  );
}

export default Dashboard;
