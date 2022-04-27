import {useState} from 'react';
export function Component1(){
    let [message,setMessage]=useState("");
    function handleSubmit(ev){
        ev.preventDefault();
        alert(message);
    }
    function showMessage(ev){
    if(ev.target.checked)
        setMessage("Candidate is interested in Java "+ev.target.value);
    else
        setMessage("Candidate is not interested in Java "+ev.target.value);
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>interested course:</label>
           <input type="checkbox" value="java" onChange={showMessage}></input> <label>:Java</label>
           <input type="submit"></input>
           <input type="reset"></input>
        </form>  
        <b>{message}</b>
        </>
    );
}
export function Component2(){
     let [city,setCity]=useState("solapur");
    let collect=(ev)=>{
        setCity(ev.target.value);
    }
    return (
        <>
        <form>
            <label>Choose city:</label>
           <select value={city} onChange={collect}>
               <option value="mumbai">Mumbai</option>
               <option value="pune">Pune</option>
               <option value="solapur">Solapur</option>
               <option value="satara">Satara</option>
           </select>
           <input type="submit"></input>
           <input type="reset"></input>
        </form>  
        <b>You have selected city : {city}</b>
        </>
    );
}
