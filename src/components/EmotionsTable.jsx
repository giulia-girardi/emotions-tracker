import React from "react";

function EmotionsTable() {
  return (
    <div>
      <table class="table-auto">
        <thead>
          <tr>
            <th></th>
            <th>Today</th>
            <th>4w</th>
            <th>avg</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sadness</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Anxiety</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Anger</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EmotionsTable;
