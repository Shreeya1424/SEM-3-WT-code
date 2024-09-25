import React, { useState } from "react";


function Calculator() {
    const [input, setInput] = useState("");

    const appendCharacter = (value) => {
        setInput((prevalue) => prevalue + value);
    };
    const cleardisplay = () => {
        setInput("");
    };
    const deleteElement = () => {
        setInput((prevalue) => prevalue.slice(0, -1));
    };
    const ansFun = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput("Error");
        }

    }
    return (
        <>
            <input type="text" readOnly placeholder="Enter here" value={input} />
            <button onClick={() => cleardisplay()}>C</button>
            <button onClick={() => deleteElement()}>X</button>
            <div>
                <button onClick={() => appendCharacter("7")}>7</button>
                <button onClick={() => appendCharacter("8")}>8</button>
                <button onClick={() => appendCharacter("9")}>9</button>
                <button onClick={() => appendCharacter("-")}>-</button>
            </div>
            <div>
                <button onClick={() => appendCharacter("4")}>4</button>
                <button onClick={() => appendCharacter("5")}>5</button>
                <button onClick={() => appendCharacter("6")}>6</button>
                <button onClick={() => appendCharacter("+")}>+</button>
            </div>
            <div>
                <button onClick={() => appendCharacter("1")}>1</button>
                <button onClick={() => appendCharacter("2")}>2</button>
                <button onClick={() => appendCharacter("3")}>3</button>
                <button onClick={() => appendCharacter("/")}>/</button>
            </div>
            <div>
                <button onClick={() => appendCharacter("0")}>0</button>
                <button onClick={() => appendCharacter(".")}>.</button>
                <button onClick={() => appendCharacter("*")}>*</button>
                <button onClick={() => ansFun()}>=</button>
            </div>



        </>
    )
}

export default Calculator;