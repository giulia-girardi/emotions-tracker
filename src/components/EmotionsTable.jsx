import React, { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../contexts/user.auth.context";

function EmotionsTable() {
  const { user } = useContext(UserAuthContext);
  const [emotions, setEmotions] = useState([])

  const currentUser = user.user;
  console.log(currentUser)

const fetchEmotionsLastWeek = async() => {
  try { 
    const response = await fetch(`http://localhost:5005/${currentUser._id}/emotions/past-week`)
    const parsed = await response.json()
    console.log('parsed', parsed)

    if (response.status === 200) {
      setEmotions(parsed)
    } else {
      console.log('error')
    } 

  } catch (error) {
   console.log(error)
  }
}

///// Computing the average of each emotion of one day 

const averageEmotions = (arr, emotion) => {
  let sum = 0
  const today = new Date().toISOString().slice(0,10)
  const todaywithoutHours = today + "T00:00:00.000Z"

  const emotionsToday = arr.filter(element => element.date == todaywithoutHours)
  emotionsToday.map(element => sum += element[emotion])
  return Math.round(sum/emotionsToday.length)
}








useEffect(() => {
    fetchEmotionsLastWeek()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /// to check if it's needed 
/*   useEffect(() => {
    fetchEmotionsLastWeek()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emotions]) */
  

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
              {averageEmotions(emotions, 'sadness')}
            </td>
            <td>8</td>

            <td>
              <a href="*"> Link</a>
            </td>
          </tr>
          <tr>
            <td>Anxiety</td>
            <td>
              {averageEmotions(emotions, 'anxiety')}
            </td>
            <td>5</td>

            <td>
              <a href="*">Link</a>
            </td>
          </tr>
          <tr>
            <td>Anger</td>
            <td>
              {averageEmotions(emotions, 'anger')}
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




/* const todayDate = new Date().toJSON().slice(0, 10); */
  /* filter to get the emotions of the day */
  /* const todayValues = currentUser.emotions.filter((emotion) => {
    if (emotion.date === todayDate) {
      return emotion;
    } else {
      return null;
    }
  }); */

/*   const today = new Date();
  let dateLimit = new Date(new Date().setDate(today.getDate() - 28))
    .toJSON()
    .slice(0, 10);
  const todayDate = today.toJSON().slice(0, 10);
  function getDays(startDate, endDate, steps = 1) {
    const dateArray = [];
      let currentDate = new Date(startDate); 
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
  console.log(dates); */
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