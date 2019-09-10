import React, { useState } from 'raect';

const UseDarkMode = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ?JSON.parse(item) :initialValue;
    })

    const setValues = (value) => {
        setStoredValue(value)
        window.localtStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValues];
}