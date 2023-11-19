import { createContext, useContext, useState } from "react";

const appContext = createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    }
    
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }
     return <appContext.Provider value={{isSidebarOpen, isModalOpen, toggleModal, toggleSidebar}}>
      {children}
    </appContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(appContext);
}
