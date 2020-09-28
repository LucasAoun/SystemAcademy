import React from 'react'
import './styles.css'
import { useState } from 'react'


const Content = () =>{
    const [show, setShow] = useState(false);
 
    return( 
        <div className="bodyContent">
        <button id="addNew" onClick={() => setShow(true)}>+ Novo aluno</button>

        <div className="contentArea"></div>
        </div>
    )
}

export default Content