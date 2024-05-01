function App() {
    // Assuming `isSidebarOpen` is obtained from context or local state
    return (
        <div className="main-container">
            <Toolbar />
            <button onClick={toggleSidebar} className="sidebar-toggle">
                <img src={menuBarIcon} alt="Menu" />
            </button>
            {isSidebarOpen && <Sidebar />}

            <div className={`main-content ${isSidebarOpen ? 'shift-right' : ''}`}>
                {/* Content here */}
            </div>
        </div>
    );
}
