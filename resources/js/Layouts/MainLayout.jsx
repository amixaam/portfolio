import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Menu from "../Components/Menu";

function MainLayout({ children, title, footer }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const ToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <Menu open={menuOpen} toggleMenu={ToggleMenu} />
            <div className="clip-f-b bg-pattern flex min-h-screen flex-col gap-8 overflow-clip bg-bg-light p-small-app md:p-default-app dark:bg-bg-dark">
                <div className="overflow-x-clip">
                    <Navbar title={title} toggleMenu={ToggleMenu} />
                </div>
                <div className="relative flex flex-1 flex-col justify-between gap-8 overflow-x-clip md:gap-16">
                    <div className="flex flex-1">{children}</div>
                    {footer === undefined ? <Footer /> : footer}
                </div>
            </div>
        </>
    );
}

export default MainLayout;
