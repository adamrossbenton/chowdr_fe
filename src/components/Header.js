import { Link } from "react-router-dom";

function Header(props){
    return (<>
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
            <div>Recommendations</div>
        </Link>

        <Link to="/">
            <div>About</div>
        </Link>
    </nav>
    </>
    );
  } 
  
  export default Header