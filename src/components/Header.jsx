import React from 'react'
import {
 Link
} from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li><Link to="/timer">Timer</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/ciclodevida">Ciclo de vida</Link></li>
                    <li><Link to="/form">Formulario</Link></li>
                    <li><Link to="/pokemons">Pokemons</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
