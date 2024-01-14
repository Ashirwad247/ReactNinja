import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("render");
  return (
    <div>
      <button className="btn" type="button" onClick={() => setToggle(!toggle)}>
        toggle Component
      </button>
      {toggle && <RandomComp></RandomComp>}
    </div>
  );
};

const RandomComp = () => {
  useEffect(() => {
    // // console.log("hmm, this is intersting");
    // const Id = setInterval(() => {
    //   // console.log("hello from interval");
    // }, 1000);
    // return () => {
    //   clearInterval(Id);
    //   console.log("cleanup");
    // };
    const someFunc = () => {
      //some logic
    };
    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, []);
  return <h1>Hello there</h1>;
};

export default CleanupFunction;
