import { useState } from "react";
export function Login(){
    let [user, setUser]=useState({
        'userName':'',
        'password':'',
    });
    let collectForm=(ev)=>{
        ev.preventDefault();
        alert("U enetered :"+user.userName+" "+user.password);
    }
    let storeValue=(ev)=>{
      console.log(ev.target.name);  console.log(ev.target.value); 
      setUser((currentUser)=>{
          return {...currentUser,[ev.target.name]:ev.target.value}
      });
    }
    return(
        <>
        <form onSubmit={(event)=>collectForm(event)} >
            <label>Enter username:</label>
            <input type="text" name="userName" value={user.userName} onChange={(event)=>storeValue(event)}></input>
            <label>Enter password:</label>
            <input type="password" name="password" value={user.password} onChange={(event)=>storeValue(event)}></input>
            <input type="submit" value="LOGIN"></input>
            <input type="reset" value="RESET"></input>
        </form>
        </>
        );
}