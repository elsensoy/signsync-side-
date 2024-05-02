import React, { useState, useEffect } from 'react';
import './Toolbar.css';
import languageIcon from './imagestop/language.png';  // Ensure the path to your language icon is correct
import logo from './imagestop/logo-no-background.png';  // Update the path if needed

const Toolbar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
   
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timerId);
    }, []);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleLanguageChange = (lang) => {
        
        setDropdownVisible(false);
    };

    return (
        <div className="toolbar">
            <img src={logo} alt="Logo" className="toolbar-logo" />  {/* Logo included here */}
            <div className="toolbar-content">
                <div className="date-time">
                    {currentTime.toLocaleTimeString()} - {currentTime.toDateString()}
                </div>
                
                <div className="toolbar-buttons">
                    <button className="toolbar-button">Home</button>
                    <button className="toolbar-button">Login</button>
                    <button className="toolbar-button">Register</button>
                    
                    <div className="language-dropdown">
                        <button onClick={toggleDropdown} className="dropdown-toggle">
                            <img src={languageIcon} alt="Language" />
                        </button>
                        {isDropdownVisible && (
                            <div className="dropdown-content">
                               <button onClick={() => handleLanguageChange('Change Language')} className="dropdown-item">Change Language</button>
                                <button onClick={() => handleLanguageChange('English')} className="dropdown-item">English</button>
                                <button onClick={() => handleLanguageChange('German')} className="dropdown-item">Deutsch</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;
