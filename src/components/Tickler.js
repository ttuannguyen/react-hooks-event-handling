import React from "react";

function Tickler() {
  function tickle(event) {
    console.log(event)
  }
  //alternatively, use arrow syntax to write function inline
  //return <button onClick={() => console.log("Teehee!")}>Tickle me!</button>

  //passing a function reference
  return <button onClick={tickle}>Tickle me!</button>;

}

export default Tickler;
