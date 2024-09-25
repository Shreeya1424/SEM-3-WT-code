import React from "react";

export default function Map(){
    const arr=["shreeya","yash","yog"]
    return(
        <ol>
            {arr.map((a)=>
            (
                <li>
                    {a}
                </li>
            ))}
        </ol>
    );
}




