
import './App.css';
import { StateComponent, StateComponent1,StateComponent2,InputComponent,InputComponent1} from './HooksComponent/UseStateComponent';
import {Footer} from './HooksComponent/UseContextComponent';
import { createContext } from 'react';
import { UseRef } from './HooksComponent/UseRefComponent';
export let MyContext=createContext();
function App() {
let borderStyle={
  border:'4px double blue',
  borderRadius:'10px',
  padding:'20px'
}
  return (<>
  {console.log("render called")}
   <MyContext.Provider value={borderStyle}>
   <StateComponent></StateComponent>
   <StateComponent1></StateComponent1>
   <StateComponent2></StateComponent2>
   <InputComponent></InputComponent>
   <InputComponent1></InputComponent1>
   <hr></hr>
   <Footer></Footer>
   <hr></hr>
   <UseRef></UseRef>
   </MyContext.Provider>
   
   </>
  );
}

export default App;
