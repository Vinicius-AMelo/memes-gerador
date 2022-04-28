import '../App.css';

export default function Interface(){
    return (
        <div className="main--interface">
            <div className="input--div">
            <input className='input--item' type='text'></input>
            <input className='input--item' type='text'></input>
            </div>
            <button onClick={alerta}>Get a new meme image</button>
        </div>
    )
}

function alerta(){

    console.log('Fui Clicado')
  }