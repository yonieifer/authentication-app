import { useState } from "react";
import axios, { AxiosError } from "axios";

export default <T>() => {
    const [error, setError] = useState<AxiosError | null>(null);
    const [loading, setLoading] = useState(false);
    const [signed, setSigned] = useState<T | null>(null);

    const signUp = (username: string, email: string, password: string) => {
        setLoading(true);
        setError(null);
        axios
            .post("http://localhost:3000/sign-up", {
                username,
                email,
                password,
            })
            .then((res) => setSigned(res.data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    };
    return {signUp, error, loading, signed}
};
