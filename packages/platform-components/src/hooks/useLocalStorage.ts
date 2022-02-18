import { useState } from 'react';

export const getLocalStorageValue = (key: string, initialValue: unknown) => {
    if (typeof window === 'undefined') {
        return initialValue;
    }
    try {
        const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : initialValue;
    } catch (error) {
        return initialValue;
    }
};

const useLocalStorage = (key: string, initialValue: unknown) => {
    const [storedValue, setStoredValue] = useState(getLocalStorageValue(key, initialValue));

    const setValue = (value: unknown) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            //TODO: add local storage error handler
        }
    };
    return [storedValue, setValue];
};

export default useLocalStorage;
