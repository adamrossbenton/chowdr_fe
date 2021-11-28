import { Link } from "react-router-dom";

function Header(props){
    
    // logs out user by clearing user's localstorage
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
            </nav>

            <nav className="subNav">
                <Link to="/">
                    <div>Home</div>
                </Link>

                <Link to="/">
                    <div>About</div>
                </Link>

                <Link to="/user/login">
                    <div>Login</div>
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
            </nav>

            <nav className="subNav">
                <Link to="/">
                    <div>Home</div>
                </Link>

                <Link to="/">
                    <div>About</div>
                </Link>

                <Link to="/user">
                    <div>My Profile</div>
                </Link>

                <form onSubmit={logout}>
                    <button id="logout">Logout</button>
                </form>
            </nav>
        </>
    }

    // check for login token and render page as appropriate
    return props.token ?
        userDisplay() : guestDisplay()
  } 
  
  export default Header