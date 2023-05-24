import React,{useState} from "react";

export const AddCalculator =()=>{
    let [Total,setTotal]=useState(0)


    const onhandleClick=()=>{
        setTotal(Total+2)
       

    }
    return(
        <div>
        <button onClick={()=>onhandleClick()}>Add1</button>
        <button onClick={()=>onhandleClick()}>Add2</button>
        <button onClick={()=>onhandleClick()}>Add3</button>
        Total:{Total}

        </div>
    )
}