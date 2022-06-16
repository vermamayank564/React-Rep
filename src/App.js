import { useState } from "react";
import "./App.css";
import Input from "./CompA";

// props, state.
// useRef, useEffect, useState ... hook.
// key, list rendering.
// Rendering.
// Api call, place to fetch data.
// Fragment.
// Controlled and uncontrolled input
// lifting state up.
// Error Boundaries
// HOC and Wrapper Comp
// Virtual DOM

function App() {
  const [state, setState] = useState({
    name: "",
    dob: Date.now(),
    age: 15,
    mobile: "123123",
  });
  const changeHandler = (name, value) => {
    setState({ [name]: value });
  };
  const [focuselement, setFE] = useState(null);
  console.log(focuselement);

  return (
    <div className="App">
      Welcome App
      <button onClick={() => setFE("age")}>App</button>
      <Input
        name="name"
        onChange={changeHandler}
        focus={"name" === focuselement}
      />
      <Input
        name="dob"
        onChange={changeHandler}
        focus={"dob" === focuselement}
      />
      <Input
        name="age"
        onChange={changeHandler}
        focus={"age" === focuselement}
      />
      <Input
        name="mobile"
        onChange={changeHandler}
        focus={"mobile" === focuselement}
      />
    </div>
  );
}

export default App;
