import React, { useState } from "react";
import LifeGrid from "./LifeGrid.js";
import "./App.css";

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function App() {
  var dobCookie = getCookie("dob");
  const [dob, setDob] = useState(
    new Date(dobCookie.split("-")[0] ?? 0).toLocaleString()
  );

  console.log("dobcookie----->", dobCookie);
  return (
    <div className="App">
      <h1> YOLO </h1>
      <div className="dateOfBirth d-flex justify-content-center">
        <label className="p1">Enter Date of Birth :</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={dobCookie || new Date().toLocaleDateString("en-US")}
          min="1970-01-01"
          onChange={(e) => {
            setDob(e.target.value);
            let exp = new Date(
              Date.now() + 3600 * 24 * 7000 * 365
            ).toUTCString();
            document.cookie = `dob=${e.target.value}; SameSite=Strict; expires=${exp}`;
          }}></input>
      </div>
      {LifeGrid(`${dob}`)}
      <br />
      <p className="ml-1 mr-1 mt-1 d-flex flex-column text-center">
        <div>
          <small>
            This shows Life in weeks. Red dots represnts life lived. Green dot
            represnts Life remaining in weeks (Considering 80 yrs lifespan).
          </small>
        </div>
        <div>
          <small>
            Each row represnts a year. And Each column represnts a week. Every
            week a green turns to red. &#128512;
          </small>
        </div>
      </p>
    </div>
  );
}

export default App;
