import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import menuBarIcon from './images/menubar.png';
import LottieAnimation from './LottieAnimation';

function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [buttonText, setButtonText] = useState("Start Now");

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleButtonClick = () => {
        setButtonText("Processing...");
        // Simulate an API call or processing delay
        setTimeout(() => {
            setButtonText("Start Now"); // Reset button text after 3 seconds
        }, 3000);
    };

    return (
        <div className="main-container">
            <Toolbar />
            <button onClick={toggleSidebar} className="sidebar-toggle">
                <img src={menuBarIcon} alt="Menu" />
            </button>

            {isSidebarOpen && <Sidebar />}

            <div className="content">
                <div className="intro-section">
                    <h1>Welcome to SignFlow - One Gesture at a Time</h1>
                    <p>SignFlow revolutionizes communication by bridging the gap between the deaf and hearing communities through cutting-edge AI technology. Our platform offers real-time sign language interpretation, making every conversation accessible and inclusive. With SignFlow, you're not just using an app; you're stepping into a world where every gesture is understood and every word matters. Experience seamless communication, one gesture at a time.</p>
                    <button className="start-now-button" onClick={handleButtonClick}>
                        {buttonText}
                    </button>
                </div>
                <LottieAnimation animationPath="animations/videocall2.json" />
            </div>
        </div>
    );
}

export default App;
