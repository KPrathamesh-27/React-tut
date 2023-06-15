//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

// var colorGreeting = [{color:"red", greet:"Morning"},
//                     {color:"green", greet:"Afternoon"},
//                     {color:"blue", greet:"Night"}];

const hourOfDay = new Date().getHours();
// console.log(hourOfDay);

var greeting;
var customStyle = {
  color: ""
};

if (hourOfDay >= 0 && hourOfDay < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (hourOfDay >= 12 && hourOfDay < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    {/* { hourOfDay >= 0 && hourOfDay < 12 ? 
    (<h1 className="heading" style={{color:"red"}}>Good Morning</h1>)
    :(hourOfDay >= 12 && hourOfDay < 18) ? 
    (<h1 className="heading" style={{color:"green"}}>Good Afternoon</h1>)
    :(<h1 className="heading" style={{color:"blue"}}>Good Night</h1>)
    } */}

    <h1 className="heading" style={customStyle}>
      {" "}
      {greeting}{" "}
    </h1>
  </div>,
  document.getElementById("root")
);
