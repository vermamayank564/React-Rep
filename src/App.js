import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import Input from "./input";
import { useHistory } from "react-router-dom";

// props, state.
// useRef, useEffect, useState ... hook.
// What thhings are render in react
// key
// lifting state up.
// memo , useCallback , useMemo
// list rendering.
// Rendering.
// Api call, place to fetch data.
// Fragment.
// Controlled and uncontrolled input
// Error Boundaries
// HOC and Wrapper Comp
// Virtual DOM

function App() {
  const [state, setState] = useState({
    name: "",
    email: "",
    age: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((s) => {
      return { ...s, [name]: value };
    });
  };
  const checkEmpty = () => {
    for (let key in state) {
      if (!state[key]) {
        return true;
      }
    }
    return false;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = checkEmpty();
    if (isEmpty) {
      //showErrorMSg
      console.log({ isEmpty });
    } else {
      // api call
      console.log(state);
    }
  };
  return (
    <div className="App">
      Welcome App
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="email" onChange={handleChange} />
        <input name="name" placeholder="name" onChange={handleChange} />
        <input
          name="age"
          placeholder="age"
          type="text"
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
export default App;
