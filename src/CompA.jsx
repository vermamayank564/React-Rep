import { useEffect, useRef } from "react";

const Input = ({ name, onChange, focus }) => {
  const ref = useRef();
  useEffect(() => {
    if (true) {
      ref.current.focus();
    }
  }, [focus]);

  return <input ref={ref} />;
};
export default Input;
