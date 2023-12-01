import { useState, useEffect } from 'react';

export function useLocalStorage(key) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const localData = localStorage.getItem(key);
        if (localData) {
            setData(JSON.parse(localData));
        }
    }, [key]);

    const saveData = (newData) => {
        localStorage.setItem(key, JSON.stringify(newData));
        setData(newData);
    };

    return [
        data,
        saveData,
    ];
}
