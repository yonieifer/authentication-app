import EnterForm from "../components/EnterForm";
import useSubmit from "../hooks/useSubmit";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const { submit, error, loading, token } = useSubmit();
    const navigate = useNavigate();
    const onLogin = (username: string, email: string, password: string) => {
        submit("log-in", username, email, password);
        if (token) {
            localStorage.setItem("token", token);            
            navigate("/user-profile");
        }
    };
    return (
        <>
            <h1>Log In Page</h1>
            <EnterForm onSubmit={onLogin} action="log in" />
            {error && <h2>error: {error.message}</h2>}
            {loading && <h2>Loading...</h2>}
        </>
    );
}

export default LoginPage;
