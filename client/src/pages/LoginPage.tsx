import EnterForm from "../components/EnterForm";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";


function LoginPage() {
    const { login, error, loading, logged } = useLogin();
    const navigate = useNavigate();
    const onLogin = (username: string, email: string, password: string) => {
        login(username, email, password);
        if (logged) navigate("/user-profile");
    };
    return (
        <>
            <h1>Sign Up Page</h1>
            <EnterForm onSubmit={onLogin} action="sign up" />
            {error && <h2>error: {error.message}</h2>}
            {loading && <h2>Loading...</h2>}
        </>
    );
}

export default LoginPage;
