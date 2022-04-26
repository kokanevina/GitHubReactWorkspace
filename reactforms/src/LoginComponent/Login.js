import { useState } from "react";


export function Login1(){
    let [uName, setUName]=useState("krupa");
    let collectForm=(ev)=>{
        ev.preventDefault();
        alert("U enetered :"+uName);
    }
    let storeValue=(ev)=>{
        setUName(ev.target.value);
    }
    return(
            <>
            <form onSubmit={(event)=>collectForm(event)} >
                <label>Enter username:</label>
                <input type="text" value={uName} onChange={(event)=>storeValue(event)}></input>
                <input type="submit" value="LOGIN"></input>
                <input type="reset" value="RESET"></input>
            </form>
            <div>
                UserName is : <b>{uName}</b>
            </div>
            </>
        );
}


export function Login2(){
    let [user, setUser]=useState({
        'userName':'vina',
        'password':'',
        'emailId':'vina@gmail.com',
        'age':30
    });
    let collectForm=(ev)=>{
        ev.preventDefault();
        alert("U enetered :"+user.userName+" "+user.password+" "+user.emailId+" "+user.age);
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
            <label>Enter email id:</label>
            <input type="email" name="emailId" value={user.emailId} onChange={(event)=>storeValue(event)}></input>
            <label>Enter age:</label>
            <input type="number" name="age" value={user.age} onChange={(event)=>storeValue(event)}></input>
            <input type="submit" value="SUBMIT"></input>
            <input type="reset" value="RESET"></input>
        </form>
        <div>
            {JSON.stringify(user)}
        </div>
        </>
        );
}
export function Login3(){
    let [user, setUser]=useState({
        'userName':'vina',
        'password':'',
        'emailId':'vina@gmail.com',
        'age':30
    });
    let [userArray, setArray]=useState([]);
    let collectForm=(ev)=>{
        ev.preventDefault();
        alert("U enetered :"+user.userName+" "+user.password+" "+user.emailId+" "+user.age);
        setArray((currentArray)=>{
            return [...currentArray,user];
        });
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
            <label>Enter email id:</label>
            <input type="email" name="emailId" value={user.emailId} onChange={(event)=>storeValue(event)}></input>
            <label>Enter age:</label>
            <input type="number" name="age" value={user.age} onChange={(event)=>storeValue(event)}></input>
            <input type="submit" value="SUBMIT"></input>
            <input type="reset" value="RESET"></input>
        </form>
        <div>
            {JSON.stringify(user)}
        </div>
        <table border="1">
            <caption>User Details</caption>
            <thead>
                <tr><th>Username</th><th>Password</th><th>Email Id</th><th>Age</th></tr>
            </thead>
            <tbody>
                {
                    userArray.map((userObj)=>{
                        return(<tr><td>{userObj.userName}</td>
                        <td>{userObj.password}</td>
                        <td>{userObj.emailId}</td>
                        <td>{userObj.age}</td>
                        </tr>);
                    })
                }
            </tbody>
        </table>
        </>
        );
}