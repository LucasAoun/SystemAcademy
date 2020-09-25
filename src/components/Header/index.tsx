import React from 'react'
import './styles.css'

const Header = () =>{
    return(
            <header>
                <div id="titleHeader">
                <h1>Dashboard</h1>
                </div>
                <div id="vdivisor"></div>
                <div id="userLog">
                    <span>Administrador</span><br/>
                    <a href="#">Sair</a>
                </div>
            </header>
    )
}

export default Header