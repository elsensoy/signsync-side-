// IconContainer.js
import React from 'react';
import './IconContainer.css'; // Assuming styles are correctly defined in this CSS file
import newMeetingIcon from './images/newmeeting-50.png';
import joinIcon from './images/join-50.png';
import scheduleIcon from './images/schedule-50.png';
import shareScreenIcon from './images/screensharing-50.png';

const IconContainer = () => {
  return (
    <div className="icon-container">
      <a href="#" className="icon-link">
        <img src={newMeetingIcon} alt="New Meeting" />
        <p>New Meeting</p>
      </a>
      <a href="#" className="icon-link">
        <img src={joinIcon} alt="Join" />
        <p>Join</p>
      </a>
      <a href="#" className="icon-link">
        <img src={scheduleIcon} alt="Schedule" />
        <p>Schedule</p>
      </a>
      <a href="#" className="icon-link">
        <img src={shareScreenIcon} alt="Share Screen" />
        <p>Share Screen</p>
      </a>
    </div>
  );
};

export default IconContainer;
