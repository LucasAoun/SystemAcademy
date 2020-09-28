import React from 'react'
import './styles.css'
import { useState } from 'react'


const Content = () =>{
    const [isModal, setIsModal] = useState(false);

    return( 
        <div className="bodyContent">
        <button id="addNew" onClick={()=>setIsModal(true)}>+ Novo aluno</button>

        <div className="contentArea">
            
        </div>
        </div>
        
    )
}

export default Content