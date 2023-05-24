import React from "react";
 
export const CarCounter =()=>{
    let [countF,setCountF]=useState(0)
    let [countT,setCountT]=useState(0)
    let [countC,setCountC]=useState(0);

    const handleClick =(carType){
        if (carType=="Ford"){
            setCountF(countF+1) 
        }
    }
    return(
        <div>
        <button>Ford</button>
        <button>Toyota</button>
        <button>Chevy</button>
        Ford:
        Toyota:
        Chevy:
        ToTal:
        </div>
    )
}