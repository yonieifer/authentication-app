import EnterForm from "../components/EnterForm";
import useSignUp from "../hooks/useSubmit";

function SignUpPage() {
    const { submit, error, loading } = useSignUp();

    return (
        <>
            <h1>Sign Up Page</h1>
            <EnterForm onSubmit={submit} action="sign-up" />
            {error && (
                <h2>error: {error.response?.data.message || error.message}</h2>
            )}
            {loading && <h2>Loading...</h2>}
        </>
    );
}

export default SignUpPage;
