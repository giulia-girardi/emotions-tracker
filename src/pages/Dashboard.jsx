import React, { useContext } from "react";
import { UserAuthContext } from "../contexts/user.auth.context";

function Dashboard() {
  const { user } = useContext(UserAuthContext);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
