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
            </div>
            <div className="bgForm">
                 <img id="iconPrincipal" src={Icon} alt=""/><br></br>
                <form>
                <input type="text" name="user" id="user" placeholder="Usuário" onChange={handleUserEntry} />
                <input type="password" name="passw" id="passw" placeholder="Senha" onChange={handlePassEntry}/>
                <button type="submit" onClick={authentication}>ENTRAR</button>
                </form>
            </div>
        </div>
    
    )
}