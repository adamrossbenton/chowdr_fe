import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";


function Index(props){
// State to hold formData
const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    description: "",
})

// handleChange function for form
const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value })
}

// handleSubmit function for form
const handleSubmit = (event) => {
    event.preventDefault()
    props.createChowders(newForm)
    setNewForm({
        name: "",
        image: "",
        description: "",
    })
};

// Adding search
const chowders = props.chowders;
const [info, setInfo] = useState(chowders);
const inputRef = useRef(null);
useEffect(() => setInfo(chowders), [props.chowders]);

const handleClick = (event) => {
    const newInfo = chowders.filter((v) => {
        const search = inputRef.current.value;
        return v.name.toLowerCase().includes(search.toLowerCase());
    });
    setInfo(newInfo);
}
console.log(info)

    // Loaded function
    const loaded = () => {
        return info.map((chowder) => (
            <div key={chowder._id} className="chowder">
                <Link to={`/chowders/${chowder._id}`}><img src={chowder.image} alt={chowder.name} /></Link>
                <Link to={`/chowders/${chowder._id}`}><h3>{chowder.name}</h3></Link>
                <Link to={`/chowders/${chowder._id}`}><p>{chowder.description}</p></Link>
            </div>
        ))
    };

    const loading = () => {
        return <h1>Loading; just a sec!</h1>
    };
return (
    <section>
        {/* <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={newForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
            required
            />
            <input
            type="text"
            value={newForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
            />
            <input
            type="text"
            value={newForm.description}
            name="description"
            placeholder="Describe this tasty chowder"
            onChange={handleChange}
            required
            />
        <input type="submit" value="Create Your Chowder" />
        </form> */}

        {/* <div className="Searchbar">
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Search</button>
        </div> */}

        <div className="chowderList">
            {info ? loaded() : loading ()}
            <button>New Chowder</button>
        </div>
   
    </section>
);
} 

  export default Index;