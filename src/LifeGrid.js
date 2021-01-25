import React from "react";
import "./LifeGrid.css";

function LifeGrid(dob) {
  const dateOfBirth = new Date(dob);
  const year = dateOfBirth.getFullYear();

  var getColor = (d) => {
    if (d > Date.now()) {
      return "green";
    } else if (d >= dateOfBirth.getTime()) {
      return "red";
    } else {
      return "white";
    }
  };

  var createTable = (year) => {
    let table = [];
    var d = new Date(`01-01-${year}`).getTime();

    // Outer loop
    for (let i = year; i < year + 80; i++) {
      let children = [];

      //Inner loop
      for (let j = 0; j < 52; j++) {
        children.push(<td key={`${j}`} className={`${getColor(d)}`}></td>);
        d = d + 3600 * 24 * 7000;
      }

      table.push(<tr key={`${i}`}>{children}</tr>);
    }
    return table;
  };

  return (
    <div className="mt-2 mb-2">
      <table className="d-flex justify-content-center">
        {/* <thead>
          <div className="space">
            <small>{year}</small>
          </div>
          <div className="space">
            <small>{year + 80}</small>
          </div>
        </thead> */}
        <tbody>
          <tr>
            <td>{year + " weeks----->"}</td>
          </tr>
          <tr>&nbsp;</tr>
          {createTable(year)}
          <tr>&nbsp;</tr>
          <tr>
            <td>{year + 80 + " weeks----->"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default LifeGrid;
