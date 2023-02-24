import React, { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../contexts/user.auth.context";

function EmotionsTable({ fetchEmotionsLastWeek, emotions }) {
  const { user } = useContext(UserAuthContext);
  // const [emotions, setEmotions] = useState([]);
  const currentUser = user.user;


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
  const emotionsByDate = {}
  
  emotions.forEach(element => {
    if (element.date in emotionsByDate) {
      emotionsByDate[element.date]['sadness'].push(element['sadness'])
      emotionsByDate[element.date]['anxiety'].push(element['anxiety'])
      emotionsByDate[element.date]['anger'].push(element['anger'])
    } else {
      emotionsByDate[element.date] = {
        sadness: [element.sadness],
        anxiety: [element.anxiety], 
        anger: [element.anger]
      }
    }
    
  })
 
  const days = Object.values(emotionsByDate);

  /// create an avEmotion in each day for each emotions
  days.map(day => {
    day.avSadness = Math.round(day.sadness.reduce((a, b) => a + b) / day.sadness.length)
    day.avAnxiety = Math.round(day.anxiety.reduce((a, b) => a + b) / day.anxiety.length)
    day.avAnger = Math.round(day.anger.reduce((a, b) => a + b) / day.anger.length)
  })

  console.log('emotionsByDate', emotionsByDate)

  // iterate through the emotions array and 
  let sumSadnessOneWeek = 0
  let sumAngerOneWeek = 0
  let sumAnxietyOneWeek = 0

  
  days.map(day => {
    sumSadnessOneWeek += day.avSadness
    sumAnxietyOneWeek += day.avAnxiety
    sumAngerOneWeek += day.avAnger
  })

  const avSadnessOneWeek = Math.round(sumSadnessOneWeek / days.length)
  const avAnxietyOneWeek = Math.round(sumAnxietyOneWeek / days.length)
  const avAngerOneWeek = Math.round(sumAngerOneWeek / days.length)
  
  

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
            <th className="pr-2 md:px-10">1w</th>

            <th className="pr-2 md:px-10"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="gap-10">
            <td>Sadness</td>
            <td>{averageEmotions(emotions, "sadness")}</td>
            <td>{avSadnessOneWeek}</td>

            <td>
              <a href="*"> Link</a>
            </td>
          </tr>
          <tr>
            <td>Anxiety</td>
            <td>{averageEmotions(emotions, "anxiety")}</td>
            <td>{avAnxietyOneWeek}</td>

            <td>
              <a href="*">Link</a>
            </td>
          </tr>
          <tr>
            <td>Anger</td>
            <td>{averageEmotions(emotions, "anger")}</td>
            <td>{avAngerOneWeek}</td>

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




/* The Average Emotion from a Week */

  // Initialize an empty object to store the average emotion values for each date

  /* const averageEmotionsWeek = (arr, emotion) => {
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
    // Return the average of the emotion  in a week or "x" days that have emotins in a week
    return Math.round(total / countDays);
  }; */