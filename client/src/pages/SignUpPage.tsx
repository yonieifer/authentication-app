import EnterForm from "../components/EnterForm";
import useSignUp from "../hooks/useSignUp";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
    const { signUp, error, loading, signed } = useSignUp();
    const navigate = useNavigate();
    const onSignUp = (username: string, email: string, password: string) => {
        signUp(username, email, password);
        if (signed) navigate("/user-profile");
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
