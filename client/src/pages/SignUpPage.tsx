import EnterForm from "../components/EnterForm";
import useSignUp from "../hooks/useSubmit";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
    const { submit, error, loading, token } = useSignUp();
    const navigate = useNavigate();
    const onSignUp = (username: string, email: string, password: string) => {
        submit("sign-up", username, email, password);
        if (token) {
            localStorage.setItem("token", token);
            navigate("/user-profile");
        }
    };
    return (
        <>
            <h1>Sign Up Page</h1>
            <EnterForm onSubmit={onSignUp} action="sign up" />
            {error && <h2>error: {error.message}</h2>}
            {loading && <h2>Loading...</h2>}
        </>
    );
}

export default SignUpPage;
