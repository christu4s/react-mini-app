import { Link } from "react-router-dom";
import '../App.css';
const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact us</Link>
                    <Link to="/about">About us</Link>
                    <Link to="/technology">Technology</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;