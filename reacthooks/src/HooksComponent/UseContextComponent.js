import { createContext, useState,useContext } from "react";
import {MyContext } from '../App';
let context=createContext();
export function Footer(){ 
    let [myArray,setBrand]=useState(['Kotton King',1998]);
    return (
        <>
        <h2>This is footer part</h2>
        <context.Provider value={myArray}>
            <Section></Section>
        </context.Provider>
        </>
        
    );
}
export function Section(){
return (
    <>
    <h3>Below are some useful links</h3>
    <SubFooter1></SubFooter1>
    <SubFooter2></SubFooter2>
    </>
    
);

}
export  function SubFooter1(){
    let arr= useContext(context);
    let [brand,year]=arr;
    let bStyle=useContext(MyContext);
    return (
        <>
         <h4>{brand}</h4>
         <h5>{year}</h5>
        <p>          
            <a href="#">Contact us</a>   <a href="#">About us</a>
        </p>
        <p style={bStyle}>
            Follow us on 
            <a href="#">Twitter</a>   <a href="#">Facebook</a>    <a href="#">Instagram</a> 
        </p>
        </>
    );
}
export  function SubFooter2(){
    let brand= useContext(context);
    let bStyle=useContext(MyContext);
    return (
        <>
        <h4>{brand}</h4>
        <p style={bStyle}>   
            Copyright 1999-2022 by Refsnes Data. All Rights Reserved.
        </p>
 
        </>
    );
}