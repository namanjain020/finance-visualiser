import React from "react";

function ValueBox(props){
    return (
        <div className="ValueBox">
            <h3>{props.text}</h3>
            <h4>{props.dollar?"$":""}{props.value}</h4>
        </div>
    )
};

export default ValueBox;

