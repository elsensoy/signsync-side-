import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import IconContainer from './IconContainer';
import menuBarIcon from './images/menubar.png';  // Import your menu bar icon
import LottieAnimation from './LottieAnimation';
function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen); // Toggle the state to open/close the sidebar
    };

    return (
        <div className="main-container">
          
            <Toolbar />
            <button onClick={toggleSidebar} className="sidebar-toggle">
    {!isSidebarOpen && <img src={menuBarIcon} alt="Menu" />}
</button>

            {isSidebarOpen && <Sidebar />}
            <div className="content">
                <header>
                    <h1>SignSync</h1>
                </header>
                
                <IconContainer />
            </div>
            <div>
            
            <LottieAnimation animationPath="animations/Animationrevised.json" />
            
        </div>

        </div>
        
        
    );
}


export default App;
