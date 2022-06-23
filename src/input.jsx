import { useState } from "react";

const Input = () => {
  const [state, setState] = useState();
  return (
    <>
      <input onChange={(e) => setState(e.target.value)} />
      {/* <button onClick={() => (ref.current.value = "my")}>change value</button> */}
    </>
  );
};
export default Input;
