import { useState } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export default () => {
    const [error, setError] = useState<AxiosError | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const submit = (
        actionUrl: string,
        username: string,
        email: string,
        password: string,
    ) => {
        setLoading(true);
        setError(null);
        axios
            .post(`http://localhost:3000/${actionUrl}`, {
                username,
                email,
                password,
            })
            .then((res) => localStorage.setItem("token", res.data.token))
            .then(() => navigate(`/user-profile/${email}`))
            .catch((error: AxiosError) => setError(error))
            .finally(() => setLoading(false));
    };
    return { submit, error, loading };
};
