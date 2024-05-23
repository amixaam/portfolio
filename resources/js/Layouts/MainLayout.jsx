import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function MainLayout({ children }) {
    return (
        <div className="clip-f-b bg-pattern h-screen overflow-clip bg-bg-light p-default-app ">
            <div className="flex h-full w-full flex-col justify-between overflow-x-clip">
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    );
}

export default MainLayout;
