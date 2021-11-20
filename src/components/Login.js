import React from "react"

const Login = props => {
    return <>
        <h1>Enter username and password to log in</h1>
        <form>
            <label>
                <p>Username: </p>
                <input type="text" placeholder="Username"/>
            </label>
            <label>
                <p>Password: </p>
                <input type="password" placeholder="Password"/>
            </label>
            <button type="submit">Login</button>
        </form>
    </>
}

export default Login