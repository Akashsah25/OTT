import { useState, useEffect } from "react";
import { FetchApi } from "../utils/Api";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        FetchApi(url)
            .then((results) => {
                setData(results);
                setLoading(false)
            })
            .catch(() => {
                setError(true);
                setLoading(false)
            })
    }, [url]);

    return { data, loading, error };
};
export default useFetch;