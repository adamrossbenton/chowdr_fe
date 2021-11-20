import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";


function New(props) {

        // State to hold formData
    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        description: "",
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
        })
        props.history.push("/")
    };

    return <div className="newChowder">
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={newForm.name}
                name="name"
                placeholder="name"
                onChange={handleChange}
                required
                />
                <input
                type="text"
                value={newForm.image}
                name="image"
                placeholder="image URL"
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
        <input type="submit" value="Create Your Chowder" />
        </form>
    </div>
}

export default New