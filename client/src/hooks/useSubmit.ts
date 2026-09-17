import { useState } from "react";
import axios, { AxiosError } from "axios";

export default () => {
    const [error, setError] = useState<AxiosError | null>(null);
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState<string | null>(null);

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
            .then((res) => setToken(res.data.token))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    };
    return { submit, error, loading, token };
};
