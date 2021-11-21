import { Link } from "react-router-dom";

function Header(props){
    
    const logout = () => {
        localStorage.clear()
    }

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

    return props.token ?
        userDisplay() : guestDisplay()
  } 
  
  export default Header