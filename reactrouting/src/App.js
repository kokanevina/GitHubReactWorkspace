
import './App.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import {Routes,Route} from 'react-router-dom';
import {Home} from './Components/Home';
import {Login} from './Components/Login';
import { Employees } from './Components/Employees';
function App() {
  return (<> 
    <div className="App">
     <Header></Header>
     <div className="view">
       This is the portion where View gets updated
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="home" element={<Home/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='showemployees' element={<Employees/>}></Route>
        </Routes>
     </div>
     <Footer></Footer>
    </div>
    </>
  );
}

export default App;
