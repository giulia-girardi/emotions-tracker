import React from "react";

function EmotionsTable() {
  return (
    <div className="flex p-2 items-center justify-center">
      <table className="table-auto text-xl ">
        <thead className="">
          <tr className="">
            <th className="pr-2 md:pr-20 pb-10"></th>
            <th className="pr-2 md:px-10">Today</th>
            <th className="pr-2 md:px-10">4w</th>
            <th className="pr-2 md:px-10">avg</th>
            <th className="pr-2 md:px-10"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="gap-10">
            <td>Sadness</td>
            <td>8</td>
            <td>8</td>
            <td>8</td>
            <td>
              <a href="#"> Link</a>
            </td>
          </tr>
          <tr>
            <td>Anxiety</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>
              <a href="#">Link</a>
            </td>
          </tr>
          <tr>
            <td>Anger</td>
            <td>5</td>
            <td>5</td>
            <td>5</td>
            <td>
              <a href="#">Link</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EmotionsTable;
