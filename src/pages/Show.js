import { useState } from "react"
import { Link } from "react-router-dom";

function Show(props){
    const id = props.match.params.id
    const chowders = props.chowders
    const chowder = chowders.find(p => p._id === id)

    const removeChowder = () => {
        props.deleteChowders(chowder._id)
        props.history.push("/")
    }

    return (
    <div className="showChowder">

        <img src={chowder.image} alt={chowder.name} />
        <div className="desc">
            <h3>{chowder.name}</h3>
            <h2>{chowder.origin}</h2>
            <p>{chowder.description}</p>
        </div>
        
        <div className="botButtons">
                <Link to={`/chowders/${chowder._id}/edit`}>
                    <button id="edit">EDIT</button>
                </Link>
            <button id="delete" onClick={removeChowder}>Delete Chowder</button>
        </div>

    </div>
    )
  } 
  
  export default Show