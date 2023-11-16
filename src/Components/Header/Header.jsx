import { Link } from "react-router-dom";
import './Header.css';


const Header = () => {
    return (
        <div>
            <h2>Welcome to my Website</h2>
            <nav className="navbar">
                <Link to= "/">Home</Link>
                <Link to= "/about">About</Link>
                <Link to= "/contact">Contact Us</Link>
                <Link to= "/users">User</Link>
                
            </nav>
        </div>
    );
};

export default Header;