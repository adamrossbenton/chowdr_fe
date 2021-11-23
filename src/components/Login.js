import React, {useState} from "react"
import {useHistory, Link} from "react-router-dom"
import PropTypes from "prop-types"
// import useToken from "../hooks/useToken"

const Login = ({setToken}) => {
    const [newForm, setNewForm] = useState()

    // used to redirect to "/" after form submission
    const history = useHistory()

    const userUrl = "https://chowdr-app.herokuapp.com/user/login"
    // TODO: Maybe swap the link above with the link below. It works for now, but might want to do this
    // const userUrl = "https://chowdr-app.herokuapp.com/user"

    const loginUser = creds => {
        return fetch(userUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(creds)
        })
        .then(data => data.json())
    }

    const handleChange = e => {
        setNewForm({
            ...newForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const {username} = newForm
        const {password} = newForm
        const token = await loginUser({
            username,
            password
        })
        setToken(token)
        history.push("/")
    }
    
    return <>
        <h1>Enter username and password to log in</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <p>Username: </p>
                <input 
                    type="text"
                    name="username" 
                    placeholder="Username" 
                    onChange={handleChange}
                    />
            </label>
            <label>
                <p>Password: </p>
                <input 
                    type="password"
                    name="password" 
                    placeholder="Password"
                    onChange={handleChange}
                    />
            </label>
            <button type="submit">Login</button>
        </form>
        <Link to="/signup"><button>Signup</button></Link>
        <Link to="/"><button>Cancel</button></Link>
    </>
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login