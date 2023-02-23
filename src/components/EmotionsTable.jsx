import React, { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../contexts/user.auth.context";

function EmotionsTable({ fetchEmotionsLastWeek, emotions }) {
  const { user } = useContext(UserAuthContext);
  // const [emotions, setEmotions] = useState([]);
  //console.log(emotions, "emtions");
  const currentUser = user.user;
  //console.log(currentUser);

  /* const fetchEmotionsLastWeek = async () => {
    try {
      const response = await fetch(
        `http://localhost:5005/${currentUser._id}/emotions/past-week`
      );
      const parsed = await response.json();
      console.log("parsed", parsed);

      if (response.status === 200) {
        setEmotions(parsed);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  }; */

  ///// Computing the average of each emotion of one day

  const averageEmotions = (arr, emotion) => {
    let sum = 0;
    const today = new Date().toISOString().slice(0, 10);
    const todaywithoutHours = today + "T00:00:00.000Z";

    const emotionsToday = arr.filter(
      (element) => element.date == todaywithoutHours
    );
    if (emotionsToday.length > 0) {
      emotionsToday.map((element) => (sum += element[emotion]));
      return Math.round(sum / emotionsToday.length);
    } else {
      return "--";
    }
  };
  //console.log(emotions);
  /* const averageEmotionsOneWeek = (arr, emotion) => {
     const emotionsByDate = {date: {
    sadness: [],
    anxiety: [],
    anger: []
  } }
  arr.map(element => {
    if (element.date in emotionsByDate) {
      emotionsByDate[element.date]['sadness'].push(element['sadness'])
    } else {
      emotionsByDate[element.date] = emotionsByDate['date']
    }
    //delete emotionsByDate['date']
  })
  console.log('emotionsByDate', emotionsByDate)  }; */

  /* The Average Emotion from a Week */

  // Initialize an empty object to store the average emotion values for each date

  const averageEmotionsWeek = (arr, emotion) => {
    const emotionAvg = {};
    let total = 0;
    let countDays = 0;

    // Loop through the array and calculate the sum and count of emotion values for each date
    arr.forEach((item) => {
      const date = item.date.slice(0, 10);
      if (!emotionAvg[date]) {
        emotionAvg[date] = { sum: 0, count: 0 };
      }

      emotionAvg[date].sum += item[emotion];
      emotionAvg[date].count++;
    });

    // Calculate the average emotion value for each date and store it in the emotionAvg object
    Object.keys(emotionAvg).forEach((date) => {
      emotionAvg[date] = emotionAvg[date].sum / emotionAvg[date].count;
      //countDays is  going to be the amount of days that we have emotions values in a week - Because sometimes people are not going to fill everyday
      countDays++;
      //total is going to sum every avg value from each day
      total += emotionAvg[date];
    });
    console.log(emotionAvg, "emotionAvg", emotion);
    //console.log(emotionAvg, "anxietyAvg", arr);
    // Return the average of the emotion  in a week or "x" days that have emotins in a week
    return Math.round(total / countDays);
  };

  console.log(
    averageEmotionsWeek(emotions, "anxiety"),
    "anxiety from the week",
    emotions
  );

  useEffect(() => {
    fetchEmotionsLastWeek();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /// to check if it's needed
  /*   useEffect(() => {
    fetchEmotionsLastWeek()
    console.log(emotions)
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
            <td>{averageEmotions(emotions, "sadness")}</td>
            <td>{averageEmotionsWeek(emotions, "sadness")}</td>

            <td>
              <a href="*"> Link</a>
            </td>
          </tr>
          <tr>
            <td>Anxiety</td>
            <td>{averageEmotions(emotions, "anxiety")}</td>
            <td>{averageEmotionsWeek(emotions, "anxiety")}</td>

            <td>
              <a href="*">Link</a>
            </td>
          </tr>
          <tr>
            <td>Anger</td>
            <td>{averageEmotions(emotions, "anger")}</td>
            <td>{averageEmotionsWeek(emotions, "anger")}</td>

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
