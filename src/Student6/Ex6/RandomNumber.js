import React,{useState} from "react";


export const RandomNumber =()=>{
    let[number,setNumber]=useState(0)


    const handleNumber=()=>{
        let randomNum=Math.floor(Math.random() * 10)
        setNumber(randomNum)
    }

    return(
     <di>
        Random Number:{number}
        <br/>
        <button onClick={()=>handleNumber()}>Generate</button>

     </di>
    )
}