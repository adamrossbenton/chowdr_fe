import React from "react"
import {useHistory} from "react-router-dom"

const User = props => {
    
    const token = props.token
    const history = useHistory()

    console.log(props.chowders)
    console.log(token.toString())
    const tokenTest = () => token === "adamrossbenton"
    console.log(tokenTest())

    // const userChowders = async () => {
    //     const newArray = await props.chowders.filter(chow =>
    //         chow.creator === token
    //     )
    //     return await newArray
    // }

    // console.log(userChowders())

    if (!token) {
        history.push("/user/login")
    }

    return <>
        <h1>hello {token}</h1>
    </>
}

export default User