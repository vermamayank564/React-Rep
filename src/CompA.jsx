import { useEffect, useRef, useState } from "react";
const Input = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    console.log("mouting", state);

    return () => {
      console.log("unmouting", state);
    };
  }, [state]);

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
