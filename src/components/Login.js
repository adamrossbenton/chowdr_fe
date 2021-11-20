import React, {useState} from "react"
import PropTypes from "prop-types"

const Login = ({setToken}) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [newForm, setNewForm] = useState()

    const handleChange = e => {
        setNewForm({
            ...newForm,
            [e.target.name]: e.target.value
        })
    }
    
    return <>
        <h1>Enter username and password to log in</h1>
        <form>
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