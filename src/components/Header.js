import { Link } from "react-router-dom";

function Header(props){
    
    // logs out user, clears user's localstorage
    const logout = () => {
        localStorage.clear()
    }

    // If user is not logged in
    const guestDisplay = () => {
        return <>
            <nav className="nav">
                <Link to="/">
                    <div>chowdr</div>
                </Link>
                <Link to="/login">
                    <button>login</button>
                </Link>
            </nav>

            <nav className="subNav">
                <Link to="/">
                    <div>Home</div>
                </Link>

                <Link to="/">
                    <div>Recommendations</div>
                </Link>

                <Link to="/">
                    <div>About</div>
                </Link>
            </nav>
        </>
    }

    // if user is logged in
    const userDisplay = () => {
        return <>
            <nav className="nav">
                <Link to="/">
                    <div>chowdr</div>
                </Link>
                <form onSubmit={logout}>
                    <button>Logout</button>
                </form>
            </nav>

            <nav className="subNav">
                <Link to="/">
                    <div>Home</div>
                </Link>

                <Link to="/">
                    <div>Recommendations</div>
                </Link>

                <Link to="/">
                    <div>About</div>
                </Link>
            </nav>
        </>
    }

    // check for login token and render page as appropriate
    return props.token ?
        userDisplay() : guestDisplay()
  } 
  
  export default Header