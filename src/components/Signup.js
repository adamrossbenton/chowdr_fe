import React, {useState} from "react"
import {useHistory, Link} from "react-router-dom"

const Signup = props => {
    const [newForm, setNewForm] = useState()

    const history = useHistory()
    const userUrl = "https://chowdr-app.herokuapp.com/user/signup"

    const createUser = async creds => {
        await fetch(userUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(creds),
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        createUser(newForm)
        setNewForm({
            username: "",
            password: "",
        })
        history.push("/user/login")
    }

    const handleChange = e => {
        setNewForm({
            ...newForm,
            [e.target.name]: e.target.value
        })
    }
    
    return <>
        <section className="signupChowder">
            <h1>Sign up to add and keep track of your own chowders</h1>
            <form onSubmit={handleSubmit} className="signupForm">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <input type="submit" value="Sign up"/>
                <Link to="/user/login"><button>Cancel</button></Link>
            </form>
        </section>
    </>
}

export default Signup