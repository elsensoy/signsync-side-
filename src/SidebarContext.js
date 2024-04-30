import React, { createContext, useState, useContext } from 'react';

const SidebarContext = createContext();

export function useSidebar() {
    return useContext(SidebarContext);
}

export const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    
    return (
        <SidebarContext.Provider value={{ isSidebarOpen, setSidebarOpen }}>
            {children}
        </SidebarContext.Provider>
    );
};
