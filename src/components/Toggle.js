import React from "react";
import { useState } from "react";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
 import "../pages/style.css";


function Toggle() {
  let [isToggleOn, setIsToggleOn] = useState(true);
  function handleClick() {
    setIsToggleOn(!isToggleOn);
  }
  return (
   
    <button
      className={"mui-btn mui-btn--fab mui-btn--primary "}
      
      onClick={() => handleClick()}
    >
      {isToggleOn ? (
        <div className="green"><CheckOutlined className="CheckOutlined" /></div>
      ) : (
       <div className="redbutton"> <CloseOutlined className="CloseOutlined" /></div>
      )}
    </button>
    
  );
}

export default Toggle;
