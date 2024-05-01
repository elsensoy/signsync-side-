import React, { useState, useEffect } from 'react';
import './Toolbar.css';

// Import images directly if using webpack or similar tool
import homeIcon from './imagestop/home.png';
import chatIcon from './imagestop/chat.png';
import phoneIcon from './imagestop/phone.png';
import meetingsIcon from './imagestop/meetings.png';
import contactIcon from './imagestop/contact.png';
import searchIcon from './imagestop/search.png';

const Toolbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isSearchVisible, setIsSearchVisible] = useState(false);  // State to control search box visibility

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  // Function to toggle search visibility
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className="toolbar">
      <div className="toolbar-content">
        <div className="date-time">
          {currentTime.toLocaleTimeString()} - {currentTime.toDateString()}
        </div>
        
        <div className="toolbar-icons">
          <img src={homeIcon} alt="Home" className="toolbar-icon"/>
          <img src={chatIcon} alt="Chat" className="toolbar-icon"/>
          <img src={phoneIcon} alt="Phone" className="toolbar-icon"/>
          <img src={meetingsIcon} alt="Meetings" className="toolbar-icon"/>
          <img src={contactIcon} alt="Contacts" className="toolbar-icon"/>
          <img onClick={toggleSearch} src={searchIcon} alt="Search" className="toolbar-icon"/>
		  </div>
        {isSearchVisible && <input type="text" placeholder="Search..." className="search-box" />}
      </div>
    </div>
  );
};

export default Toolbar;
