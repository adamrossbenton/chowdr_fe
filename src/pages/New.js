import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";


function New(props) {

        // State to hold formData
    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        description: "",
        origin: "",
    })

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
            description: "",
            origin: "",
        })
        props.history.push("/")
    };

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
                value={newForm.description}
                name="description"
                placeholder="Describe this tasty chowder"
                onChange={handleChange}
                required
                />
                <input
                type="text"
                value={newForm.origin}
                name="origin"
                placeholder="Country of Origin"
                onChange={handleChange}
                required
                />
        <input type="submit" value="Create Your Chowder" id="newCButton"/>
        </form>
    </div>
}

export default New