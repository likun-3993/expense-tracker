import React from "react" ;

import "./ExpDate.css";

let ExpDate=(props)=> {
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let year = props.date.getFullYear();

  return (
    <div>
      <p className="date">
        {month} {day} , {year}
      </p>
    </div>
  );
}

export default ExpDate;