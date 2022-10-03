import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Nav() {
    return (
        <header>
            <nav>
                <ul >
                    <li >
                        <hr />
                        <NavLink exact to="/" >Home</NavLink>
                       
                        <hr />
                    </li>
                </ul>
            </nav>
        </header>
    )
}