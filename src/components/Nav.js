import React from 'react'
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <nav>
                <input type="checkbox" id="nav" class="hidden"/>
                <label for="nav" class="nav-open"><i></i><i></i><i></i></label>
                <div class="nav-container">
                    <div class="flex">
                    <div class="logo">
                        <Link to="/"><h3>Slano boat Excursions</h3></Link>
                    </div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/dubrovnik">Dubrovnik by boat</Link></li>
                        <li><Link to="/elaphiti">Elaphite islands cruise</Link></li>
                        <li><Link to="/ston">Ston excursion</Link></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    </div>
                </div> 
            </nav>
        </div>
    )
}

export default Nav
