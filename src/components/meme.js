import '../App.css'
import MemeImg from './images/memeimg.png'

export default function Meme() {
    return (
        <div className="main--meme">
            <img className='img--meme' src={MemeImg} alt='MEME'></img>
        </div>
    )

}