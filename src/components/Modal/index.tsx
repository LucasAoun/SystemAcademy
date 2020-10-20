import React from 'react'
import './styles.css'

const Modal = () =>{
    return(
        <div className="modalContainer">
            <div className="modalContent">
            <div className="modalTitle">
                <h1>Informações obrigatórias do aluno</h1>
            </div>
            <form className="modalInput" action="">
                <input type="text" id="nameStudent" name="nameStudent" placeholder="Nome do aluno"/>
                <input type="text" id="lastName" name="lastName" placeholder="Sobrenome"/>
                <select className="allContentSelect">
                    <option value=""  disabled selected>Selecione o sexo</option>
                    <option value="1">Masculino</option>
                    <option value="2">Feminino</option>
                </select>
                <input type="text" id="height" name="height" placeholder="Altura"/>
                <input type="text" id="weight" name="weight" placeholder="Peso"/>
                <input className="allContent" type="date" id="birthDate" name="birthDate" placeholder="Data de nascimento"/>
                <input type="number" id="cpfStudent" name="cpfStudent" placeholder="CPF"/>
                <input type="text" id="rg" name="rg" placeholder="RG"/>
                <input className="allContent" type="text" id="street" name="street" placeholder="Endereço"/>
                <input type="text" id="andress" name="andress" placeholder="Bairro"/>
                <input type="number" id="cep" name="cep" placeholder="CEP"/>
                <div className="modalButton">
                <button type="submit">Salvar</button>
                <button className="cancel">Cancelar</button>
                </div>
            
            </form>
            </div>
        </div>
    )
}

export default Modal