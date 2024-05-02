import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar'; // Assuming Toolbar also includes the logo image for toggling

import LottieAnimation from './LottieAnimation';

function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [buttonText, setButtonText] = useState("New Meeting");

    // Function to toggle the sidebar visibility
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    // Function to handle starting a new meeting, simulating an API call
    const handleStartMeeting = () => {
        setButtonText("Starting...");
        setTimeout(() => {
            setButtonText("Start Now"); // Reset button text after the simulation
            // In a real application, here you might transition to the video call interface
        }, 3000);
    };

    return (
        <div className="main-container">
            {/* Render the Toolbar component; pass toggleSidebar if using logo as toggle button */}
            <Toolbar toggleSidebar={toggleSidebar} />

            {/* Conditional rendering of the Sidebar component based on its visibility state */}
            {isSidebarOpen && <Sidebar />}
            <LottieAnimation animationPath="/animations/new.json" className="second-animation-style" />
            <LottieAnimation animationPath="/animations/hw.json" className="third-animation-style" />
            {/* Main content area */}
            <div className="content">
                {/* Introductory section with information and a call to action button */}
                <div className="intro-section">
                    <h1>Welcome to <span>SignFlow</span> 

                    </h1>
                    <p>SignFlow revolutionizes communication by bridging the gap between the deaf and hearing communities through cutting-edge AI technology. Our platform offers real-time sign language interpretation, making every conversation accessible and inclusive. With SignFlow, you're not just using an app; you're stepping into a world where every gesture is understood and every word matters. Experience seamless communication, one gesture at a time.</p>
                    <button className="btn btn-primary start-now-button" onClick={handleStartMeeting}>
                        {buttonText}
                    </button>
                </div>

                {/* Lottie animation for visual engagement */}
                
                <LottieAnimation animationPath="animations/videocall2.json" className="first-animation-style" />
            </div>
        </div>
    );
}

export default App;
