import { useState, useContext } from 'react';
import './NavBar.css'
import {Link, NavLink, Outlet, useNavigate} from 'react-router-dom';
import { LoginContext } from '../../App';
import pic from "../../assets/Asclepius_Logo.jpg";

function NavBar(){
    const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext);
    const [pages,setPages] = useState(["Login","Sign Up"]);
    const[pagesL, setPagesL] = useState(["AI Diagnostics", "Health Tracking","Profile"]);

    const navigate = useNavigate();

    return(
        <header className="header1">
            <Link to="/" className="profile">
            <img src={pic} alt="Logo" className="pic"></img>
            <p>Asclepius</p></Link>
            <nav className="navbar">
            {isLoggedIn?
            pagesL.map((key, index) =>{
                return <NavLink to={"/"+(key.toLowerCase().replace(/\s/g, ""))} key = {index}>{key}</NavLink>
            })
            :
            pages.map((key, index) =>{
                return <NavLink to={"/"+(key.toLowerCase().replace(/\s/g, ""))} key = {index}>{key}</NavLink>
            })}

            </nav>
        </header>
    )

}

export default NavBar;