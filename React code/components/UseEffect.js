import React, { useEffect, useState} from "react"

function UseEffect(){
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://jasonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>{
setData(data);
        })
},[]);

return(
    <>
    
    <h1>DATA</h1>
    <ul>
        {data.map((item)=>(
           <li key={item.id}>{item.title}</li> 
        ))}
    </ul>
    
    </>
)
}
export default UseEffect;