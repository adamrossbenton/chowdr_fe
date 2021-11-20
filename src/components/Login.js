import React from "react"

const Login = props => {
    return <>
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