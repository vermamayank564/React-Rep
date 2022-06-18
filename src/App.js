import { useCallback, useRef, useState } from "react";
import "./App.css";
import CompA from "./CompA";
import Input from "./CompA";
import CompB from "./CompB";

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
  const [state, setState] = useState(0);
  const a = {
    // {value : 5}
    value: 5,
  };
  return (
    <div className="App">
      Welcome App
      <CompA data={a} />
      <button
        onClick={() => {
          setState((s) => s + 1);
          a.value = 6;
        }}
      >
        change
      </button>
    </div>
  );
}
export default App;
