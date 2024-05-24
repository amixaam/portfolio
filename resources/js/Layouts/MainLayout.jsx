import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function MainLayout({ children, title }) {
    return (
        <div className="clip-f-b bg-pattern min-h-screen overflow-clip bg-bg-light p-default-app dark:bg-bg-dark ">
            <div className="overflow-x-clip">
                <Navbar title={title} />
                <div className="flex min-h-screen w-full flex-col justify-between py-8">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default MainLayout;
