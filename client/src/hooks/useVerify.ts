import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import type { UserProfileType } from "../types";

export default () => {
    const [error, setError] = useState<AxiosError | null>(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<UserProfileType | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        const token = localStorage.getItem("token")
        axios
            .get(`http://localhost:3000/verify-token`, {headers: {Authorization: 'Bearer ' + token}})
            .then((res) => setData(res.data))
            .catch((error: AxiosError) => setError(error))
            .finally(() => setLoading(false));
    }, []);
    return { error, loading, data };
};
