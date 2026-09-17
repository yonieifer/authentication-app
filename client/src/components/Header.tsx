import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    const onLogout = () => {
        localStorage.removeItem("token")
        navigate("/log-in")
    }
    return (
        <>
            <nav>
                <Link to="log-in">login</Link>
                <Link to="/sign-up">sign up</Link>
                <button onClick={onLogout}>logout</button>
            </nav>
        </>
    );
}

export default Header;
