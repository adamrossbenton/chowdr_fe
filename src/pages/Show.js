import { useState } from "react"
function Show(props){
    const id = props.match.params.id
    const chowders = props.chowders
    const chowder = chowders.find(p => p._id === id)

    // State for form
    const [editForm, setEditForm] = useState(chowder)

    // handleChange function for form
    const handleChange = event => {
        setEditForm({...editForm, [event.target.name]: event.target.value })
    }

// handleSubmit for form
const handleSubmit = event => {
    event.preventDefault()
    props.updateChowders(editForm, chowder._id)
    // redirect back to index
    props.history.push("/")
}

const removeChowder = () => {
    props.deleteChowders(chowder._id)
    props.history.push("/")
}

    return (
    <div className="chowder">
     
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={editForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
            />
            <input
            type="text"
            value={editForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
            />
            <input
            type="text"
            value={editForm.description}
            name="description"
            placeholder="Edit the description of this tasty chowder"
            onChange={handleChange}
            />
        <input type="submit" value="Update Your Chowder" />
        </form>

        <h1>{chowder.name}</h1>
        <img src={chowder.image} alt={chowder.name} />
        <h3>{chowder.description}</h3>
        
        <button id="delete" onClick={removeChowder}>Delete Chowder</button>
    </div>
    )
  } 
  
  export default Show