import React from "react";
function Heading(props) {
  return (
    <div className="Heading">
        <h2 >{props.text}</h2>
        <p>{props.p}</p>
    </div>
  );
}

export default Heading;
