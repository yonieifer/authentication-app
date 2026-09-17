import EnterForm from "../components/EnterForm";
import useSubmit from "../hooks/useSubmit";

function LoginPage() {
    const { submit, error, loading } = useSubmit();
    
    return (
        <>
            <h1>Log In Page</h1>
            <EnterForm onSubmit={submit} action="log-in" />
            {error && <h2>error: {error.response?.data.message || error.message}</h2>}
            {loading && <h2>Loading...</h2>}
        </>
    );
}

export default LoginPage;
