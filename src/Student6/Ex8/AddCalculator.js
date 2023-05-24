import React,{useState} from "react";

export const AddCalculator =()=>{
    let [num1,setNum1]=useState(0)


    const onhandleClick=()=>{
        setNum1(num1+2)
       

    }
    return(
        <div>
        <button onClick={()=>onhandleClick()}>Add1</button>
        <button onClick={()=>onhandleClick()}>Add2</button>
        <button onClick={()=>onhandleClick()}>Add3</button>
        Total:{num1}

        </div>
    )
}