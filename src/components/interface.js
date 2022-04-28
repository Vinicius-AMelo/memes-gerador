import React, {useState} from 'react';
import '../App.css';
import MemesData from './memesData'


export default function Interface(i){

    const [urlSrc, setUrlSrc] = useState('')
    
    function handleSubmit(){
        const dataArr = MemesData.data.memes
        i = Math.floor(Math.random() * (100 + 0) - 0)
        const  url = dataArr[i].url
        setUrlSrc(url)
        
    }

    return (
        <div className="main--interface">
            <div className="input--div">
            <input className='input--item' type='text'></input>
            <input className='input--item' type='text'></input>
            </div>
            <button onClick={handleSubmit}>Get a new meme Image</button>
            <div className="main--meme">
            {urlSrc && <img className='img--meme' src={urlSrc} alt='meme'></img>}
        </div>

        </div>
        
    )
}