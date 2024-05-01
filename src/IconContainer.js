import React from 'react';
import './IconContainer.css'; // Ensure your CSS supports button styling
import newMeetingIcon from './images/newmeeting-50.png';
import joinIcon from './images/join-50.png';
import scheduleIcon from './images/schedule-50.png';
import shareScreenIcon from './images/screensharing-50.png';

const IconContainer = () => {
  // Function to handle click events (if necessary)
  const handleClick = (action) => {
    console.log(`${action} clicked`);
  };

  return (
    <div className="icon-container">
      <button className="icon-link" onClick={() => handleClick('New Meeting')}>
        <img src={newMeetingIcon} alt="New Meeting" />
        <p>New Meeting</p>
      </button>
      <button className="icon-link" onClick={() => handleClick('Join')}>
        <img src={joinIcon} alt="Join" />
        <p>Join</p>
      </button>
      <button className="icon-link" onClick={() => handleClick('Schedule')}>
        <img src={scheduleIcon} alt="Schedule" />
        <p>Schedule</p>
      </button>
      <button className="icon-link" onClick={() => handleClick('Share Screen')}>
        <img src={shareScreenIcon} alt="Share Screen" />
        <p>Share Screen</p>
      </button>
    </div>
  );
};

export default IconContainer;
