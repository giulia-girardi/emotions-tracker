import React, { useContext } from "react";
import { UserAuthContext } from "../contexts/user.auth.context";

function EmotionsTable() {
  const { user } = useContext(UserAuthContext);
  const currentUser = user.user;

  return (
    <div className="flex p-2 items-center justify-center">
      <table className="table-auto text-xl ">
        <thead className="">
          <tr className="">
            <th className="pr-2 md:pr-20 pb-10"></th>
            <th className="pr-2 md:px-10">Today</th>
            <th className="pr-2 md:px-10">4w</th>

            <th className="pr-2 md:px-10"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="gap-10">
            <td>Sadness</td>
            <td>
              {/*  {todayValues
                .map((emotion) => emotion.sadness)
                .reduce((a, b) => a + b) / todayValues.length} */}
            </td>
            <td>8</td>

            <td>
              <a href="*"> Link</a>
            </td>
          </tr>
          <tr>
            <td>Anxiety</td>
            <td>
              {" "}
              {/* {todayValues
                .map((emotion) => emotion.anxiety)
                .reduce((a, b) => a + b) / todayValues.length} */}
            </td>
            <td>5</td>

            <td>
              <a href="*">Link</a>
            </td>
          </tr>
          <tr>
            <td>Anger</td>
            <td>
              {" "}
              {/*  {todayValues
                .map((emotion) => emotion.anger)
                .reduce((a, b) => a + b) / todayValues.length} */}
            </td>
            <td>5</td>

            <td>
              <a href="*">Link</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EmotionsTable;
