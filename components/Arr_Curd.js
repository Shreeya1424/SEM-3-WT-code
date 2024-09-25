import React,{useState} from "react";

function Arr_Curd(){
    const [arr,setArray] = useState(["hello","from","world","to","me","my"]);
    const [name,setName]=useState("");
    const addIntoArray = () =>{
        if(name==""){
            alert ("cant add empty value");
            return;
        }
        setArray([...arr,name]);
        setName("");
    };

    const deleteElement=(index)=>{
        const newarr =arr.filter((item)=>{
            return arr.indexOf(item) !==index;
        });
        setArray(newarr);
    };

    const editElement=(index)=>{
        let newName= prompt("Enter new name");
        let newarr=[...arr];
        newarr[index]=newName;
        setArray(newarr);
    }

    return(
        <>
        <div style={{padding: "40px"}}>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />

        <button onClick={addIntoArray}>Add</button>
        <br />
        <ul>
            {arr.map((item,index)=>{
                return(
                    <li key={index}>
                        {item}
                        <button onClick={()=>{deleteElement(index)}}>delete</button>
                        <button onClick={()=>{editElement(index)}}>edit</button>

                    </li>
                );
            })}
        </ul>
        </div>
        
        </>
    )
}
export default Arr_Curd;