import React,{ useState } from "react";


export const Buttons=()=>{
    const [button,SetButton]= useState('Push')

    const onChangeButton=()=>{
        SetButton("Pushed")
    }
    const onResetButton=()=>{
        SetButton("Push")
    }
    return(
    <div>
    <button onClick={()=>onChangeButton()}>{button}</button>
    <br/>
    <button onClick={()=>onChangeButton()}>{button}</button>
    <br/>
    <button onClick={()=>onResetButton()}>Reset</button>
    </div>
    )
}
//comment