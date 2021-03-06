import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show"
import New from "../pages/New"
import Edit from "../pages/Edit";
import Login from "./Login"
import Signup from "./Signup"
import About from "../pages/About";


function Main(props){
    const [chowders, setChowders] = useState(null);

    const URL = "https://chowdr-app.herokuapp.com/chowders/";
    // const URL = "http://localhost:4000/chowders"
    
    const getChowders = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setChowders(data);
    };

    const createChowders = async (chowder) => {
        // Make post request to create chowders
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(chowder),
        });
        // Update list of chowders
        getChowders();
    };

const updateChowders = async (chowder, id) => {
    // Make put request to update chowders
    await fetch(URL + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(chowder),
    });
    // Update list of chowders
    getChowders();
    }

const deleteChowders = async id => {
    // Make delete request 
    await fetch(URL + id, {
        method: "delete",
        });
    // Update list of chowders
    getChowders();
    }

    useEffect(() => getChowders(),[]);

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index chowders={chowders} createChowders={createChowders} token={props.token} />
                </Route>

                <Route path="/chowders/:id/edit"
                render={(rp) => (
                    <Edit chowders={chowders} updateChowders={updateChowders} token={props.token} {...rp}/>
                )}/>

                <Route 
                path="/chowders/:id"
                render={(rp) => (
                    <Show
                    chowders={chowders}
                    updateChowders={updateChowders}
                    deleteChowders={deleteChowders}
                    {...rp}
                    />
                    )}
                />

                <Route path="/new"
                render={(rp) => (
                    <New createChowders={createChowders} token={props.token} {...rp}/>
                )}/>

                <Route path="/about">
                    <About />
                </Route>


                <Route path="/user/login">
                    <Login setToken={props.setToken}/>
                </Route>
                <Route path="/user/signup">
                    <Signup />
                </Route>
            </Switch>
        </main>
    );
  } 
  
  export default Main