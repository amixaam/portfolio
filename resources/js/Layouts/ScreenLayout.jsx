import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function ScreenLayout({ children, title, footer, forceScreen = false }) {
    return (
        <div className={`${forceScreen && "h-screen"} clip-f-b xl:h-screen bg-pattern overflow-clip bg-bg-light p-small-app md:p-default-app dark:bg-bg-dark`}>
            <div className="flex h-full w-full flex-col justify-between overflow-x-clip">
                <Navbar title={title} />
                {children}
                {footer === undefined ? <Footer /> : footer}
            </div>
        </div>
    );
}

export default ScreenLayout;
