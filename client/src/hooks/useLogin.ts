import { useState } from "react";
import axios, { AxiosError } from "axios";

export default <T>() => {
    const [error, setError] = useState<AxiosError | null>(null);
    const [loading, setLoading] = useState(false);
    const [logged, setLogged] = useState<T | null>(null);

    const login = (username: string, email: string, password: string) => {
        setLoading(true);
        setError(null);
        axios
            .post("http://localhost:3000/log-in", {
                username,
                email,
                password,
            })
            .then((res) => setLogged(res.data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    };
    return {login, error, loading, logged}
};