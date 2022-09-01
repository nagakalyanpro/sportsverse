
import React, {useState, useContext} from "react";

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [closeSideBar, setCloseSideBar] = useState(true);

    const openSideBarMenu =() =>{
        setIsSidebarOpen(true)
    }
    const closeSideBarMenu =() =>{
        setCloseSideBar(false)
    }
  

    return <AppContext.Provider value={{isSidebarOpen, closeSideBar, openSideBarMenu, closeSideBarMenu}}>{children}</AppContext.Provider>
}

export const useGlobalContext =()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider};