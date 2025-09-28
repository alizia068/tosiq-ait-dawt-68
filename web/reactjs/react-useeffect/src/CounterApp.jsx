import React, { useEffect, useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const show = () => {
    setCounter(counter + 1);
  };
  
  useEffect(()=>{
    console.log("Counter value is:" + counter)
  },[])

  useEffect(()=>{
    console.log("Counter value is:" + counter)
  },[counter])

  return (
    <>
      <h1>The counting is: {counter}</h1>
      <button onClick={show}>CLICK</button>
    </>
  );
};

export default CounterApp;
