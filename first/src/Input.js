import React from "react";
function Input(props) {
  return (
    <div className="set">
      <p className="labels">{props.label}</p>
      {/* <img src={props.src} alt={props.alternate} /> */}
      <input
        className="input"
        type={props.type}
        placeholder={props.placeholder}
        value= {props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
export default Input;
