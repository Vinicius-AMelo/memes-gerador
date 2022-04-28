import React from "react"
import TrollFace from './images/Troll Face.png'
import '../App.css';

export default function Nav (){
return (
    <div className="main--nav">
        
            <nav id="troll--nav">
            <img src={TrollFace} alt="TrollFace" className="trollface"></img>
            <h3>Meme Generator</h3>
            </nav>       
            <p id="nav--text">React Course - Project 3</p>
        
    </div>
)
}