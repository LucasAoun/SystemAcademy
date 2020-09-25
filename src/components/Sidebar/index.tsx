import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const Sidebar = () =>{
    return(
        <div className="bodySidebar">
            <div className="linkPages">
            <Link to=""><i className="fa fa-home"></i></Link>
            <Link to=""><i className="fas fa-users" ></i></Link>
            <Link to=""><i className="fas fa-user-circle"></i></Link>
            <Link to=""><i className="fas fa-cog"></i></Link>
            <Link to="" id="exitIcon"><i className="fas fa-sign-out-alt"></i></Link>
            </div>
        </div>
    )
}
export default Sidebar