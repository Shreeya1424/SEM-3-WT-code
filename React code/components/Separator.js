import React from "react";

function Seprator(props){
    let temp=" ";
    for(let i=0;i<props.count;i++){
      temp+=props.by;
    }
    return(<h1>{temp}</h1>);
  }

export default Seprator;