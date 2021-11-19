import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show"

function Main(props){
    const [chowders, setChowders] = useState(null);

    const URL = "http://localhost:3000/chowders";

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

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index chowders={chowders} createChowders={createChowders} />
                </Route>
                <Route 
                path="/chowders/:id"
                render={(rp) => (
                    <Show
                    {...rp}
                    />
                    )}
                    />
            </Switch>
        </main>
    );
  } 
  
  export default Main