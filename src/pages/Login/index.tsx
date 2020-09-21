import React, {FormEvent, ChangeEvent } from 'react'
import './styles.css'
import Icon from '../../assets/icon.jpg'

export const Login = () =>{
    const handleUserEntry = (event: ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = event.target;
        console.log(name, value)
    }
    
    return(
        <div className="bgLogin">
            <div className="bgImage">
            </div>
            <div className="bgForm">
                 <img id="iconPrincipal" src={Icon} alt=""/><br></br>
                <form>
                <input type="text" name="user" id="user" placeholder="Usuário" onChange={handleUserEntry} />
                <input type="password" name="passw" id="passw" placeholder="Senha"/>
                <button type="submit">ENTRAR</button>
                </form>
            </div>
        </div>
    
    )
}