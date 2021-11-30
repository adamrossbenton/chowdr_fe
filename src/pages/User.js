import React, {useState} from "react"
import {useHistory} from "react-router-dom"

const User = props => {
    const token = props.token
    const history = useHistory()
    const allChowders = props.chowders

    const [info, setInfo] = useState(allChowders)

    console.log(allChowders)
    console.log(token)
    const tokenTest = () => token === "adamrossbenton"
    console.log(tokenTest())

    // if not logged in
    if (!token) {
        history.push("/user/login")
    }

    // if loaded
    const loaded = () => {
        const asyncChowders = async arr => {
            await arr.reduce(async (acc, nxt) => {
                const userMatch = chowder => chowder.creator === token
                const res = await userMatch(nxt)
                if (!res) {
                    return acc
                }
    
                return (await acc).concat(nxt)
            }, [])
        }
    
        const userChowders = asyncChowders(allChowders)    
    }

    // if loading
    const loading = () => {
        return <h1>Loading...</h1>
    }

    return allChowders ? loaded() : loading()
}

export default User