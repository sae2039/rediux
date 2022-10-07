import React from "react";

import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;

// import React from "react";

// import "./App.css";

// import { useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "./store";
// import { useSelector } from "react-redux";
// import { RootState } from "./store/reducers";

// function App() {
//   const dispatch = useDispatch();
//   const { incrementCounter } = bindActionCreators(actionCreators, dispatch);
//   const toggleCounterHandler = () => {
//     incrementCounter(100);
//   };
//   const counter = useSelector((state: RootState) => state.counter);
//   return (
//     <>
//       <h1>Redux Counter</h1>
//       {counter}
//       <button onClick={toggleCounterHandler}>increment Counter</button>
//     </>
//   );
// }

// export default App;
