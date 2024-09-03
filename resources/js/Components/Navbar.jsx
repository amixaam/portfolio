import React from "react";
import Icon from "../../../public/images/icons/Icon";

function Navbar({ title = "Roberts brinkis", toggleMenu }) {
    return (
        <nav className="clip-f-b flex flex-col gap-4">
            <div className="hidden bg-secondary-light dark:bg-secondary-dark"></div>
            <div className="hidden fill-text-light dark:fill-text-dark"></div>
            <div className="flex flex-row items-center gap-4 md:gap-8">
                <button onMouseDown={toggleMenu}>
                    <Icon
                        className="md:size-18 size-10 rounded-icon p-2 transition-all hover:-mt-2 sm:size-14"
                        icon="menu"
                    />
                </button>
                <h1 className="text-nowrap uppercase md:text-wrap lg:text-nowrap">
                    {title}
                </h1>

                <div className="overflow-clip">
                    <div className="carousel-t-r hidden flex-shrink-0 flex-row flex-nowrap gap-8 md:flex">
                        {Array.from({ length: 20 }, (_, i) => (
                            <Icon
                                key={i}
                                size={96}
                                minimise={true}
                                icon="arrow-right"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="hidden flex-row items-center gap-4">
                <Icon
                    className="rounded-icon p-2 transition-all hover:-mt-2"
                    icon="dark-mode"
                />
                <Icon
                    className="rounded-icon p-2 transition-all hover:-mt-2"
                    icon="menu"
                />
                <Icon className="opacity-0" icon="menu" />
            </div>
        </nav>
    );
}

export default Navbar;
