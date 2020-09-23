import React, {FormEvent, ChangeEvent, useState } from 'react'
import './styles.css'
import Icon from '../../assets/icon.jpg'


export const Login = () =>{
    const handleUserEntry = (event: ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = event.target;
        setUserEntry(value)
        console.log(name, value)
    }
    const handlePassEntry = (event: ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = event.target;
        setPassEntry(value)
        console.log(name, value)
    }
    const [userEntry, setUserEntry] = useState('')
    const [passEntry, setPassEntry] = useState('')

    const authentication = (event: FormEvent) =>{
        event.preventDefault()
        console.log(userEntry)
        console.log(passEntry)
    }
 
    
    return(
        <div className="bgLogin">
            <div className="bgImage">
                <h1>Academy System</h1>
            </div>
            <div className="bgForm">
                <img id="iconPrincipal" src={Icon} alt=""/><br></br>
                <form>
                    <div id="inputUser">
                        <i className="fa fa-user"></i>  
                        <input type="text" name="user" id="user" placeholder="Usuário" onChange={handleUserEntry} />
                    </div>
                    <div id="inputPass">
                         <i className="fa fa-lock"></i>
                         <input type="password" name="passw" id="passw" placeholder="Senha" onChange={handlePassEntry}/>
                    </div>
                    <a href="#">Forgot your password?</a>
                    <button type="submit" onClick={authentication}><span>ENTRAR</span></button>
                </form> 
            </div>
        </div>
    
    )
}