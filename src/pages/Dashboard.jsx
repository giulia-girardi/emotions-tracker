import React, { useContext, useState } from "react";
import EmotionsTable from "../components/EmotionsTable";
import LogEmotionsModal from "../components/LogEmotionsModal";
import { UserAuthContext } from "../contexts/user.auth.context";

function Dashboard() {
  const { user } = useContext(UserAuthContext);
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {user && (
        <div className="flex flex-col items-center">
          <h1 className=" text-dark-green  font-roboto text-6xl">
            Hello <strong className=""> {user.firstName}</strong>!
          </h1>
          <div className=" w-4/6 drop-shadow-3xl bg-white border-2 border-solid border-green  rounded-xl p-10">
            {" "}
            <EmotionsTable />
          </div>
        <button onClick={() => setShowModal(true)} >Log emotions</button>
        <LogEmotionsModal showModal={showModal} setShowModal={setShowModal}/>
        </div>
      )}
    </>
  );
}

export default Dashboard;
