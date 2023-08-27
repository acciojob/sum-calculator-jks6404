
import React, { useState } from "react";
import './../styles/App.css';


const App = () => {

  let [sum,setSum] = useState(0);

  const updateSum = (e)=>{
    let value = parseFloat(e.target.value);
    setSum((prevState)=> prevState + value);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <input type="number" onChange={(e)=>updateSum(e)}/>
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App