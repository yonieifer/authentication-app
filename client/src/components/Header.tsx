import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <nav>
                <Link to="log-in">login</Link>
                <Link to="/sign-up">sign up</Link>
                <Link to="/log-out">logout</Link>
            </nav>
        </>
    );
}

export default Header;
