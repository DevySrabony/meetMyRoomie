
import React from 'react';
import { useDarkMode } from './ThemeContext';

const ThemeToggle = () => {
    const {darkMode , setDarkMode } = useDarkMode()
    return (
        <button onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer p-1 border rounded-4xl border-orange-500'>
            {darkMode ? '☀️' :'🌙'}
        </button>
    );
};

export default ThemeToggle;