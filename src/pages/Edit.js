import { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function Edit(props) {

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

    return <div className="formChowder">
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
            <input
            type="text"
            value={editForm.origin}
            name="origin"
            placeholder="Country of Origin"
            onChange={handleChange}
            />
        <input type="submit" value="Update Your Chowder" />
        </form>
    </div>
}

export default Edit