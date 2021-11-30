import { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";


function New(props) {

    const token = props.token

        // State to hold formData
    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        origin: "",
        description: "",
        origin: "",
        creator: props.token,
    })

    // useHistory to redirect if user logs out while on page
    const history = useHistory()

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }

    // handleSubmit function for form
    const handleSubmit = (event) => {
        event.preventDefault()
        props.createChowders(newForm)
        setNewForm({
            name: "",
            image: "",
            origin: "",
            description: "",
            origin: "",
            creator: props.token,
        })
        props.history.push("/")
    };

    if (!token) {
        history.push("/user/login")
    }

    return <div className="newChowder">
            <form onSubmit={handleSubmit} className="newForm">
                <input
                type="text"
                value={newForm.name}
                name="name"
                placeholder="Name"
                onChange={handleChange}
                required
                />
                <input
                type="text"
                value={newForm.image}
                name="image"
                placeholder="Image URL"
                onChange={handleChange}
                />
                <input
                type="text"
                value={newForm.origin}
                name="origin"
                placeholder="Country of Origin"
                onChange={handleChange}
                required
                />
                <textarea 
                cols="53"
                rows="10"
                value={newForm.description}
                name="description"
                placeholder="Edit the description of this tasty chowder"
                onChange={handleChange}
                required
                />
                <input
                type="text"
                value={newForm.creator}
                name="creator"
                placeholder="Created By:"
                onChange={handleChange}
                style={{display: "none"}}
                />
        <input type="submit" value="Create Your Chowder" id="newCButton"/>
        </form>
    </div>
}

export default New