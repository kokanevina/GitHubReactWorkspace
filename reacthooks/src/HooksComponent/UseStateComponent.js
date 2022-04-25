import { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
// react 16.8
// no need of class components
// access the states of variables also other react features

// useState : to maintain the state of properties, it listens the state change

export function StateComponent(){
    let [companyName, setCompany] =useState('NeoSoft Technology');
    let [counter, setCounter]=useState(0);
    let bStyle=useContext(MyContext);
     /*useEffect is called whenever we want to do something after rendering, 
     example: fetch the data from backend*/
     useEffect(()=>{
        alert("Counter value changed");
    },[counter]); 
     useEffect(()=>{
         document.title="Hooks Demos";
         alert("company Name changed");
     },[companyName]);
    function changeName(){
        setCompany("Squad Infotech");
        console.log("company name is:"+companyName);
    }  
    return(
        <div style={bStyle}>Welcome to <h2>{companyName}</h2>
        <button onClick={changeName}>CHANGE</button>
        <div>Counter is <b>{counter}</b></div>
        <button className="btn btn-primary" 
        onClick={()=>setCounter(++counter)}>INCREMENT</button>
        </div>
    ); 
}
export function StateComponent1(){
    let [styleObj,setStyle]=useState({
        color:'green', border:'4px solid red',backgroundColor:'yellow'
    });
    function changeBackground(){
        setStyle(currentObj=>{
            return {...currentObj, backgroundColor:'pink'}
        });
    }
    function changeAll(){
        let newStyle={
            color:'blue',  border:'4px dashed pink',
            backgroundColor:'green',padding:'10px'
        }
        setStyle(newStyle);
    }
    return(
        <section>
            <div style={styleObj}>India is my country</div>
            <button onClick={changeBackground}>CHANGE BACKGROUND</button>
            <button className="btn btn-success" onClick={changeAll}>CHANGE ALL</button>
        </section>
    );
}
export function StateComponent2(){
    let myArray=['hi','hello','bye'];
    let [array,setElement]=useState(myArray);
    function pushEle(){
        setElement(currentArray=>{
            return [...currentArray,'welcome']
        });
    }
    return (
        <>
           <ol>
            {
                array.map(ele=>{
                    return (<li key={ele}>{ele}</li>);
                })
            }
        </ol>
        <button onClick={pushEle}>PUSH</button>
        </>
    );
}

export function InputComponent(){
    let [companyName, setCompany] =useState('NeoSoft Technology'); 

    return(
        <div>Welcome to <h2>{companyName}</h2>
        <label>Enter Company Name: </label>
        <input type="text" value={companyName} onChange={(ev)=>setCompany(ev.target.value)}></input>
        </div>
    ); 
}

export function InputComponent1(){
    let [styleObj,setStyle]=useState({
        color:'green', border:'4px solid red',backgroundColor:'yellow'
    });
    function changeBackground(event){
        setStyle(currentObj=>{
            return {...currentObj, [event.target.name]:event.target.value}
        });
    }
    return(
        <section>
            <div style={styleObj}>India is my country</div>
            <input type="text" name="backgroundColor" value={styleObj.backgroundColor} onChange={(e)=>changeBackground(e)}></input>
            <input type="text" name="color" value={styleObj.color} onChange={(e)=>changeBackground(e)}></input>
            <button onClick={changeBackground}>CHANGE BACKGROUND</button>
        </section>
    );
}
// take element from user to push into array. 