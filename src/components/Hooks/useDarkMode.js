import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage.js';

const UseDarkMode = (key, initialValue) => {

    const [darkModeView, setDarkModeView] = useLocalStorage('dark', false);

    useEffect(() => {
        const app = document.querySelector('.App');
        darkModeView ? app.classList.add('dark-mode') : app.classList.remove('dark-mode');
    }, [darkModeView])

    return [darkModeView, setDarkModeView];



}
export default UseDarkMode;