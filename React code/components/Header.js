import React from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div>        
                        {/* <img src="C:\Users\SOFT\Downloads\icons8-b-64.png"/> */}
                        LOGO
                    </div>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/contect">Contect</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/help">Help</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
           
        </>
    );
}

export default Header;