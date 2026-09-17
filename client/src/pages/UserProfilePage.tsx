import useGetProfile from "../hooks/useGetProfile";
import { useParams } from "react-router-dom";

function UserProfilePage() {
    const { email } = useParams();        
    const { error, loading, data } = useGetProfile(email!);
    return (
        <>
            {error && <h2>error: {error.response?.data.message || error.message}</h2>}
            {loading && <h2>Loading...</h2>}
            {data && (
                <section>
                    <h2>{data.user.username}</h2>
                    <p>{data.user.email}</p>
                    <p>ID: {data.user.id}</p>
                </section>
            )}
        </>
    );
}

export default UserProfilePage;
