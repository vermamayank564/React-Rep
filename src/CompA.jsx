import { useEffect, useRef, useState } from "react";
const Input = () => {
  const [state, setState] = useState(0);
  const ref = useRef(0);
  useEffect(() => {
    console.log("ref", ref.current);
  }, [ref.current]);

  return (
    <div>
      Input
      <button
        onClick={() => {
          // setState(state + 1);
          ref.current = ref.current + 1;
        }}
      >
        first
      </button>
    </div>
  );
};
export default Input;
