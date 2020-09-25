import React from 'react'
import './styles.css'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Content from '../../components/Content'

export const Home = () =>{
    return (
        <div className="Home">
           <Sidebar/>
           <Header/>
           <Content/>
        </div>
         
  )
}