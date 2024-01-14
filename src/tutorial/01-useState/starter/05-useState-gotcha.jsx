import { useState } from "react";

const UseStateGotcha = () => {
  const [count, SetCount] = useState(0);
  const changeCount = () => {
    //  SetCount((currentState)=>{
    //   const newState = currentState+1
    //   console.log(currentState)
    //   return newState;
    //  });
    setTimeout(() => {
      SetCount((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={changeCount}>
        Click
      </button>
    </div>
  );
};

export default UseStateGotcha;
