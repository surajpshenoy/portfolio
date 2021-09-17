import React from 'react'
import "./Topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="main">
                <div className="details">
                    <a href="#intro" className="logo">Suraj Shenoy</a>
                    <div className="infoContainer">
                    <Person className="icon"/><span>+61435585759</span>
                    </div>
                    <div className="infoContainer">
                    <Mail className="icon"/>
                    <span>surajpshenoy@gmail.com</span>
                    </div>
                </div>
                <div>
                    
                </div>
                <div className="rigth-btn">
                    right btn
                 </div>
            </div>
        </div>
    )
}
