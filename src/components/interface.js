import React, { useState, useEffect } from 'react';
import '../App.css';

export default function Interface(i) {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/grr.jpg',
    })

    const [allMemeImages, setAllMemeImages] = useState('')

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [meme])


    function handleSubmit(e) {
        e.preventDefault()
        i = Math.floor(Math.random() * (100 + 0) - 0)
        const url = allMemeImages[i].url

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

    function handleChange(e) {
        const { name, value } = e.target
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
                    onChange={handleChange} />
            </div>
            <button onClick={handleSubmit}>Get a new meme Image</button>
            <div className="main--meme">
                {meme.randomImage && <img className='img--meme' src={meme.randomImage} alt='memes'></img>}
                <h1 className='meme--text top'>{meme.topText}</h1>
                <h1 className='meme--text bottom'>{meme.bottomText}</h1>
            </div>

        </form>

    )
}

