import React, { useState } from 'react';
import { Switch } from '@mui/joy';


export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={`bg-${darkMode ? 'gray-800' : 'gray-300'} p-4 text-${darkMode ? 'white' : 'black'}`}>
      <nav className="container mx-auto flex justify-center items-center">
        <a href="/about" className={`hover:bg-${darkMode ? 'gray-700' : 'gray-200'} px-4 py-2 rounded transition duration-300`}>
          About
        </a>
        <a href="/skills" className={`hover:bg-${darkMode ? 'gray-700' : 'gray-200'} px-4 py-2 rounded transition duration-300`}>
          Skills
        </a>
        <a href="/projects" className={`hover:bg-${darkMode ? 'gray-700' : 'gray-200'} px-4 py-2 rounded transition duration-300`}>
          Projects
        </a>
        <a href="/contact" className={`hover:bg-${darkMode ? 'gray-700' : 'gray-200'} px-4 py-2 rounded transition duration-300`}>
          Contact
        </a>

        <Switch
          color="primary"
          disabled={false}
          size="lg"
          onChange={toggleDarkMode}
          variant="solid"
        />
      </nav>
    </header>
  );
};


