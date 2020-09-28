import React from 'react'
import './styles.css'

const Modal = () =>{
    return(
        <div className="modalContent">
            <div className="modalTitle">
                <h1>Olá mundo</h1>
            </div>
            <form action="">
                <input type="text" id="nameStudent" name="nameStudent" placeholder="Nome do aluno"/>
                <input type="text" id="lastName" name="lastName" placeholder="Sobrenome"/>
                <input type="number" id="cpfStudent" name="cpfStudent" placeholder="CPF"/>
                <input type="date" id="dateNasc" name="dateNasc" placeholder="Data de nascimento"/>
            </form>
        </div>
    )
}

export default Modal