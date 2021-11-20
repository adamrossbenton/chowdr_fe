import React, {useState} from "react"
import PropTypes from "prop-types"

const Login = ({setToken}) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [newForm, setNewForm] = useState()

    const userUrl = "http://localhost:4000/user/login"

    const handleChange = e => {
        setNewForm({
            ...newForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({
            username,
            password
        })
        setToken(token)
    }
    
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

    return <>
        <h1>Enter username and password to log in</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <p>Username: </p>
                <input 
                    type="text" 
                    placeholder="Username" 
                    onChange={handleChange}
                    />
            </label>
            <label>
                <p>Password: </p>
                <input 
                    type="password" 
                    placeholder="Password"
                    onChange={handleChange}
                    />
            </label>
            <button type="submit">Login</button>
        </form>
    </>
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login