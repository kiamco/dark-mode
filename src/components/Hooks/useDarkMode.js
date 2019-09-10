import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage.js';

const UseDarkMode = (key, initialValue) => {

    const [darkModeView, setDarkModeView] = useLocalStorage('dark', false);
    return [darkModeView,setDarkModeView];
}
export default UseDarkMode;