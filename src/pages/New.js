import { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";


function New(props) {

        // State to hold formData
    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        description: "",
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
            description: "",
        })
        props.history.push("/")
    };

    if (!props.token) {
        history.push("/user/login")
        // return <>
        //     <h1>Oops!</h1>
        //     <p>It looks like you logged out before completing your submission.</p><br/>
        //     <Link to="/user/login"><button>Login</button></Link>
        // </>
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
                value={newForm.description}
                name="description"
                placeholder="Describe this tasty chowder"
                onChange={handleChange}
                required
                />
        <input type="submit" value="Create Your Chowder" id="newCButton"/>
        </form>
    </div>
}

export default New