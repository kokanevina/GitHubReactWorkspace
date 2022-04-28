import './MyStyle.css'
import { Link} from 'react-router-dom';
export function Navbar(){
    return (
    <nav class="myNav">
        <ul class="myList">
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
           <li><Link to="/showemployees">SHOWS EMPLOYEES</Link></li>
        {/*    <li><a href="#">CONTACT US</a></li>  */}
        </ul>
    </nav>
    );
}