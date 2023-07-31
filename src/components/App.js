
import React,{useState} from "react";
import './../styles/App.css';
import Sum from "./sum";
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <Sum sum={sum} setSum={setSum}/>
          <p>Sum: {sum}</p>
    </div>
  )
}

export default App
