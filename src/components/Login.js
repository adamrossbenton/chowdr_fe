import React, {useState} from "react"
import {useHistory, Link} from "react-router-dom"
import PropTypes from "prop-types"

const Login = ({setToken}) => {
    const [newForm, setNewForm] = useState()
    const [attempts, setAttempts] = useState(0)

    // used to redirect to "/" after form submission
    const history = useHistory()

    const userUrl = "https://chowdr-app.herokuapp.com/user/login"

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
        setAttempts(attempts + 1)    
        e.preventDefault()
        if (newForm) {
            const {username} = newForm
            const {password} = newForm
            const token = await loginUser({
                username,
                password
            })
            setToken(token)
            if (token) {
                history.push("/")
            }
        }
    }

    const noUser = () => {
        if (attempts > 0) {
            return <p>Incorrect username and/or password, please try again</p>
        }
    }

    // Testing to see if github is still broken

    // TODO: Upon successful login, "password incorrect" briefly renders prior to redirect. Maybe set timer or some sort of promise to fix?
    // const waitNoUser = () => {
    //     if (attempts > 0) {
    //         console.log("testing...")
    //         setTimeout(() => {
    //             noUser()
    //         }, 1000)    
    //     }
    // }
    
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
        {noUser()}
        <Link to="/user/signup"><button>Signup</button></Link>
        <Link to="/"><button>Cancel</button></Link>
    </>
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login