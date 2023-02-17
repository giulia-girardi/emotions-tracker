import React, { useContext } from "react";
import { UserAuthContext } from "../contexts/user.auth.context";

function EmotionsTable() {
  const { user } = useContext(UserAuthContext);
  const currentUser = user.user;
  console.log(currentUser.emotions)
  /* const todayDate = new Date().toJSON().slice(0, 10); */
  /* filter to get the emotions of the day */
  /* const todayValues = currentUser.emotions.filter((emotion) => {
    if (emotion.date === todayDate) {
      return emotion;
    } else {
      return null;
    }
  }); */

  const today = new Date();
  let dateLimit = new Date(new Date().setDate(today.getDate() - 28))
    .toJSON()
    .slice(0, 10);
  const todayDate = today.toJSON().slice(0, 10);
  function getDays(startDate, endDate, steps = 1) {
    const dateArray = [];
    /*  let currentDate = new Date(startDate); */
    console.log(new Date(todayDate) <= new Date(dateLimit));
    while (new Date(todayDate) === new Date(dateLimit)) {
      console.log("hello");
      dateArray.push(new Date(todayDate).toJSON().slice(0, 10));
      console.log(dateArray);
      // Use UTC date to prevent problems with time zones and DST
      todayDate.setUTCDate(todayDate.getUTCDate() + steps);
    }

    return dateArray;
  }
  getDays();
  const dates = getDays(todayDate, dateLimit);
  console.log(dates);
  /* function getEmotions() {
    const arrAnger = [];
    for (let i = 0; i < 28; i++) {
      currentUser.emotions.filter((emotion) => {
        if (emotion.date === todayDate) {
          return emotion;
        }
      });
       arrAnger.push(); 
    }
  } */

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
