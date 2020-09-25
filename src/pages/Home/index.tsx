import React from 'react'
import './styles.css'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'

export const Home = () =>{
    return (
        <div className="Home">
           <Sidebar/>
           <Header/>
        </div>
  )
}