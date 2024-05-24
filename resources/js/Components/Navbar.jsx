import React from "react";
import Icon from "../../../public/icons/Icon";

function Navbar({ title = "Roberts brinkis" }) {
    return (
        <nav className="clip-f-b flex flex-col gap-4">
            <div className="hidden bg-secondary-light dark:bg-secondary-dark"></div>
            <div className="hidden fill-text-light dark:fill-text-dark"></div>
            <div className="flex flex-row items-center gap-8">
                <h1 className="testing text-nowrap uppercase">{title}</h1>

                <div className="overflow-clip">
                    <div className="carousel-t-r flex flex-shrink-0 flex-row flex-nowrap gap-8">
                        {Array.from({ length: 20 }, (_, i) => (
                            <Icon
                                key={i}
                                size={96}
                                // className="clip-f-l"
                                icon="arrow-right"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex hidden flex-row items-center gap-4">
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
