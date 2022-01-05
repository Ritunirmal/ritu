import React, { useState } from "react";

const App = () => {
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("click me");

  const bgChange = () =>{
    let newBg = "#34495e";
    setBg(newBg);
    setName("don't click me")
  };

  const bgBack = () =>{
    setBg(purple);
    setName("thanx");
  };

  return (
     <>
     <div style = {{ backgroundColor : bg }}>
     <button onMouseEnter={bgChange} onMouseLeave={bgBack}> {name} </button>
     </div>
     </>
  );
};

export default App;