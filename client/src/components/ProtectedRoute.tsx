import React from "react";
import { Outlet, useNavigate , Navigate} from "react-router-dom";
import useVerify from "../hooks/useVerify";

function ProtectedRoute() {
    const { error, loading, data } = useVerify();
    const navigate = useNavigate();
    if (!data) return <Navigate to="/"/>;
    return <Outlet />;
}

export default ProtectedRoute;
