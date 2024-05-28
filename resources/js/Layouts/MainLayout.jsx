import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function MainLayout({ children, title }) {
    return (
        <div className="clip-f-b bg-pattern min-h-screen overflow-clip bg-bg-light p-small-app md:p-default-app dark:bg-bg-dark ">
            <div className="flex h-full flex-col gap-16">
                <Navbar title={title} />
                {/* <div className="flex h-full flex-col gap-16"></div> */}
                {children}
                <Footer />
            </div>
        </div>
    );
}

export default MainLayout;
