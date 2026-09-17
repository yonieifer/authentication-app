import { Outlet , Navigate} from "react-router-dom";
import useVerify from "../hooks/useVerify";

function ProtectedRoute() {
    const { error, loading, data } = useVerify();
    if (!data && !loading) return <Navigate to="/"/>;
    return <Outlet />;
}

export default ProtectedRoute;
