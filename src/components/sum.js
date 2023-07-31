import React from "react";

const Sum=({sum,setSum})=>{

    // let[sum,setSum]=useState(0);
    function addTosum(e){
        setSum(sum + +e.target.value);
    }
    return(
        <div>
            <input type="number" onChange={addTosum}/>
        </div>
    )
}
export default Sum;