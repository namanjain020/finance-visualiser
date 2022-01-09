import React from "react";
function WorkBox(props) {
  return (
    <div className="WorkBox">
      <input type={"checkbox"} className={"form-check-input"} id={"flexCheckDefault"}/>
      <label className={"form-check-label"} for={"flexCheckDefault"} > 
      <div className="textList">
        <h1>{props.task}</h1>
        <h2>{props.date}</h2>
      </div>
      </label>
    </div>
  );
}

export default WorkBox;
