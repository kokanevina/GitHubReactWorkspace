
import './App.css';
import { Component1, Component2 } from './Components/Controlled';
import { Login1,Login2,Login3, Login4} from './LoginComponent/Login';
import { NameForm } from './UncontrolledComponent/Demo';

function App() {
  return (
    <div className="App">
     <Login1></Login1>
     <hr></hr>
     <Login2></Login2>
     <hr></hr>
     <Login3></Login3>
     <hr></hr>
     <Login4></Login4>
     <hr></hr>
    <NameForm></NameForm>
    <hr></hr>
    <Component1></Component1>
    <hr></hr>
    <Component2></Component2>
    </div>
  );
}

export default App;
