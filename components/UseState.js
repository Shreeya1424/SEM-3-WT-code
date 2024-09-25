import React, { useState } from "react"

function UseState(){
    const [count,setCount] = useState(0);
    
return(
    <>
    <p>{count}</p>
    <button onClick={()=>{setCount(count+1);}}>Increment</button>
    
    <button onClick={()=>{setCount(count-1)}}>decrement,</button>

    </>
)
}

export default UseState;

