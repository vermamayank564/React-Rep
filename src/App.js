import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import CompA from "./CompA";
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
  const [state2, setState2] = useState(0);

  // const ref = useRef({
  //   value: state,
  // });
  /* -------------------------------------------------------------------------- */
  // state 1 (B1)
  // staet 2 (B2)

  // state 1 =>a => <Comp  />
  /* -------------------------------------------------------------------------- */

  const a = useMemo(() => {
    console.log("useMemo run");
    return {
      value: state,
    };
  }, [state]);

  return (
    <div className="App">
      Welcome App
      <CompA data={a} />
      <button
        onClick={() => {
          setState((s) => s + 1);
        }}
      >
        change state 1
      </button>
      <button
        onClick={() => {
          setState2((s) => s + 1);
        }}
      >
        change state 2
      </button>
    </div>
  );
}
export default App;
