import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import type { UserProfileType } from "../types";

export default (email: string) => {
    const [error, setError] = useState<AxiosError | null>(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<UserProfileType | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        const token = localStorage.getItem("token")
        axios
            .get(`http://localhost:3000/user-profile/${email}`, {headers: {Authorization: 'Bearer ' + token}})
            .then((res) => setData(res.data))
            .catch((error: AxiosError) => setError(error))
            .finally(() => setLoading(false));
    }, [email]);
    return { error, loading, data };
};
