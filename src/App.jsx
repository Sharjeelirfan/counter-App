import "./App.css";
import { useState } from "react";

function App() {
  let [num, setNum] = useState(0);

  let incFun = () => {
    num < 20
      ? setNum(num + 1)
      : alert("Number is exceeded 20. No more increments.");
  };
  let decFun = () => {
    num <= 0 
      ? alert("Not count in - num") 
      : setNum(num - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{num}</h1>
        <button onClick={incFun}>Increament</button>
        <br />
        <button onClick={decFun}>Decreament</button>
      </header>
    </div>
  );
}

export default App;


