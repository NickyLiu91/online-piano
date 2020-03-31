import React from "react";
import BlackKeys from "./Blackkeys.js"
import WhiteKeys from "./Whitekeys.js"

const Keyboard = (props) => {
  return(
    <div id ="keyboard">
      <WhiteKeys />
      <BlackKeys />
    </div>
  )
}

export default Keyboard;
