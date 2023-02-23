import { stringify } from "json5";
import React, { useContext, useState } from "react";
import { Fragment } from "react";
import EmotionsTable from "../components/EmotionsTable";
import LogEmotionsModal from "../components/LogEmotionsModal";
import { UserAuthContext } from "../contexts/user.auth.context";

/* import TodayFeeling from "../components/TodayFeeling"; */

function Dashboard() {
  const { user } = useContext(UserAuthContext);
  const currentUser = user.user;
  const [showModal, setShowModal] = useState(false);
  const [emotions, setEmotions] = useState([])

  const fetchEmotionsLastWeek = async() => {
    try { 
      const response = await fetch(`http://localhost:5005/${currentUser._id}/emotions/past-week`)
      const parsed = await response.json()
  
      if (response.status === 200) {
        setEmotions(parsed)
      } else {
        console.log('error')
      } 
  
    } catch (error) {
     console.log(error)
    }
  }

  return (
    <>
      {user && (
        <div className="flex flex-col items-center">
          <h1 className=" text-dark-green  font-roboto text-2xl md:text-6xl pt-3">
            Hello{" "}
            <strong className="">
              {currentUser.firstName.charAt(0).toUpperCase() +
                currentUser.firstName.slice(1)}
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
            <EmotionsTable fetchEmotionsLastWeek={fetchEmotionsLastWeek} emotions={emotions} width="50px" />
          </div>
          <button onClick={() => setShowModal(true)}>Log emotions</button>

          <LogEmotionsModal showModal={showModal} setShowModal={setShowModal} fetchEmotionsLastWeek={fetchEmotionsLastWeek} />
        </div>
      )}
    </>
  );
}

export default Dashboard;
