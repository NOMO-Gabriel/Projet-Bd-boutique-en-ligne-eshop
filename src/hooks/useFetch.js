import { useState, useEffect } from 'react';

const useFetch = (apiCall) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        apiCall()
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [apiCall]);

    return { data, loading, error };
};

export default useFetch;
 