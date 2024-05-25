import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function ScreenLayout({ children, title }) {
    return (
        <div className="clip-f-b bg-pattern h-screen overflow-clip bg-bg-light p-default-app dark:bg-bg-dark ">
            <div className="flex h-full w-full flex-col justify-between overflow-x-clip">
                <Navbar title={title}/>
                {children}
                <Footer />
            </div>
        </div>
    );
}

export default ScreenLayout;
