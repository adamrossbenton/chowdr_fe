import { useState } from "react";
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

// handle submit function for form
const handleSubmit = (event) => {
    event.preventDefault()
    props.createChowders(newForm)
    setNewForm({
        name: "",
        image: "",
        description: "",
    })
};

    // Loaded function
    const loaded = () => {
        return props.chowders.map((chowder) => (
            <div key={chowder._id} className="chowder">
                <Link to={`/chowders/${chowder._id}`}><h1>{chowder.name}</h1></Link>
                <img src={chowder.image} alt={chowder.name} />
                <h3>{chowder.description}</h3>
            </div>
        ))
    };

    const loading = () => {
        return <h1>Loading; just a sec!</h1>
    };
return (
    <section>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={newForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
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
            />
        <input type="submit" value="Create Your Chowder" />
        </form>
        {props.chowders ? loaded() : loading ()}
   
    </section>
);
} 

  export default Index;