import { useEffect, useRef, useState } from "react";
const Input = () => {
  const [state, setState] = useState(0);
  console.log({ state });
  useEffect(() => {
    console.log("mounting");
    return () => {
      console.log("unmouting");
    };
  }, []);
  console.log("render");
  return (
    <div>
      Input
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        first
      </button>
    </div>
  );
};
export default Input;
