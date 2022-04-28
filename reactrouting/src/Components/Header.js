import './MyStyle.css'
import { Navbar } from './Navbar';
export function Header(){
    return (
    <header className="myHeader">
        <h1>NeoSoft Technologies</h1>
        <Navbar></Navbar>
    </header>
    );
}
