import React, {useState} from "react"
import {useHistory, Link} from "react-router-dom"

const Signup = props => {
    const [newForm, setNewForm] = useState()

    const history = useHistory()
    const userUrl = "https://chowdr-app.herokuapp.com/user/login"

    const handleChange = e => {
        setNewForm({
            ...newForm,
            [e.target.name]: e.target.value
        })
    }
    
    return <>
        <Link to="/login"><button>Cancel</button></Link>
    </>
}

export default Signup