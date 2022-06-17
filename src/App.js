import { useState } from "react";
import "./App.css";
import Input from "./CompA";

// props, state.
// useRef, useEffect, useState ... hook.
// What thhings are render in react
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
  const [flag, toggleFlag] = useState(true);
  return (
    <div className="App">
      Welcome App
      <button
        onClick={() => {
          toggleFlag((f) => !f);
        }}
      >
        toggle
      </button>
      {flag && <Input />}
    </div>
  );
}
export default App;
