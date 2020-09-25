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
        <div id="bodyLogin">
        <div className="bgLogin">
            <div className="bgImage">
                <h1>GymSystem</h1>
                <p>Seja bem vindo ao seu sistema de gerencimento de alunos e matrículas</p>
                <div id="vdivisor"></div>
                <p>Com o GymSystem você pode controlar matrículas credenciadas, fazer seu planejamento de treinamentos, cadastrar alunos, tudo de forma ágil e sem complicações! </p>
            </div>      
            <div className="bgForm">
            <h1>GymSystem</h1>  
            <p>Seja bem vindo ao seu sistema de gerencimento de alunos e matrículas</p>
                <img id="iconPrincipal" src={Icon} alt=""/><br></br>
                <form>
                    <div id="inputUser">
                        <i className="fa fa-user"></i>  
                        <input type="text"  name="user" id="user" placeholder="Usuário" onChange={handleUserEntry} />
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
        </div>
    
    )
}