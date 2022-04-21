import { useState } from "react";

// react 16.8
// no need of class components
// access the states of variables also other react features

// useState : to maintain the state of properties, it listens the state change

export function UseState(){
    let [companyName, setCompany] =useState('NeoSoft Technology');
    let [counter, setCounter]=useState(0);
    function changeName(){
        setCompany("Squad Infotech");
        console.log("company name is:"+companyName);
    }  
    return(
        <div>Welcome to <h2>{companyName}</h2>
        <button onClick={changeName}>CHANGE</button>
        <div>Counter is <b>{counter}</b></div>
        <button onClick={()=>setCounter(++counter)}>INCREMENT</button>
        </div>
    );

    
}