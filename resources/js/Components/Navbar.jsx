import React from "react";
import Icon from "../../../public/icons/Icon";

function Navbar() {
    return (
        <nav className="clip-f-b flex flex-col gap-4">
            <div className="hidden h-[1px] bg-secondary-light"></div>
            <div className="flex flex-row items-center gap-8">
                <h1 className="testing text-nowrap uppercase">
                    Roberts brinkis
                </h1>

                <div className="overflow-clip">
                    <div className="carousel-t-r flex flex-shrink-0 flex-row flex-nowrap gap-8">
                        {Array.from({ length: 10 }, (_, i) => (
                            <Icon
                                key={i}
                                size={96}
                                className="clip-f-l"
                                icon="arrow-right"
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center gap-4 ">
                <Icon
                    className="clip-f-l rounded-icon p-2 transition-all hover:-mt-2"
                    icon="dark-mode"
                />
                <Icon
                    className="clip-f-l rounded-icon p-2 transition-all hover:-mt-2"
                    icon="menu"
                />
                <Icon
                    className="opacity-0"
                    icon="menu"
                />
            </div>
        </nav>
    );
}

export default Navbar;
