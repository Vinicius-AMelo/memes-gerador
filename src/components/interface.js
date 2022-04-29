import React, { useState } from 'react';
import '../App.css';
import MemesData from './memesData'


export default function Interface(i) {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: '',
    })

    const [allMemeImages, setAllMemeImages] = useState(MemesData)
    
    function handleSubmit(e) {
        e.preventDefault()
        const dataArr = allMemeImages.data.memes
        i = Math.floor(Math.random() * (100 + 0) - 0)
        const url = dataArr[i].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }
    
    console.log(meme)

    function handleChange(e){
        const {name, value} = e.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    
    return (
        <form className="main--interface">
            <div className="input--div">
                <input 
                className='input--item top'
                type='text'
                placeholder='Texto Superior'
                name='topText'
                onChange={handleChange}
                />
                <input 
                className='input--item' 
                type='text'
                placeholder='Texto Inferior'
                name='bottomText'
                onChange={handleChange}/>
            </div>
            <button onClick={handleSubmit}>Get a new meme Image</button>
            <div className="main--meme">
                {meme.randomImage && <img className='img--meme' src={meme.randomImage} alt='meme'></img>}
                <h1 className='meme--text top'>{meme.topText}</h1>
                <h1 className='meme--text bottom'>{meme.bottomText}</h1>
            </div>

        </form>

    )
}