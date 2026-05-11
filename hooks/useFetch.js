import { useState, useEffect, useCallback } from 'react';

// ============================================================
// TODO 1
// This hook accepts a url string.
// Declare three state variables: data, loading, error.
// Use useEffect to fetch the url when the hook mounts.
// Use .then() or async/await with try/catch/finally.
// Also return a refetch function so the component can
// re-trigger the fetch when needed.
// Return { data, loading, error, refetch }.
// ============================================================

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (newUrl) => {
        const targetUrl = newUrl || url;
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(targetUrl);
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err);
            setData(null);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData };
}

export default useFetch;
