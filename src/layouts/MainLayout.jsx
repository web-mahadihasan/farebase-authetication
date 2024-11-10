import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { createContext, useState } from "react";

export const UserLogInInfo = createContext("user")

const MainLayout = () => {
    const [logInUser, setLogInUser] = useState(null)
    return (
        <UserLogInInfo.Provider value={[logInUser, setLogInUser]}>
            <div>
            <Navbar/>
            <div className="min-h-[calc(100vh-294px)]">
                <Outlet/>
            </div>
            <Footer/>
        </div>
        </UserLogInInfo.Provider>
    );
};

export default MainLayout;