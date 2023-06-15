//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

var dateobj = new Date();
const year = dateobj.getFullYear();
const fname = "Prathamesh";
const lname = "Kusalkar";

ReactDOM.render(
  <div>
    <p>Created by {fname + " " + lname}.</p>
    <p>Copyright {year}.</p>
  </div>,
  document.getElementById("root")
)