import React,{useState} from "react";
 
export const CarCounter =()=>{
    let [countF,setCountF]=useState(0)
    let [countT,setCountT]=useState(0)
    let [countC,setCountC]=useState(0);

    const handleFord =()=>setCountF(countF+1)
    const handToyota =()=>setCountT(countT+1)
    const handleChevy =()=>setCountC(countC+1)

        
    return(
        <div>
        <button onClick={()=>handleFord()}>Ford</button>
        <button onClick={()=>handToyota()}>Toyota</button>
        <button onClick={()=>handleChevy()}>Chevy</button>
        <br/>
        Ford:{countF}
        <br/>
        Toyota:{countT}
        <br/>
        Chevy:{countC}
        <br/>
        ToTal:{countF+countT+countC}
        </div>
    )
}