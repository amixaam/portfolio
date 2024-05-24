import React from "react";
import Icon from "../../../public/icons/Icon";
import { CalcYo } from "../Utils/CalcYo";

function Footer() {
    const year = CalcYo();

    return (
        <footer className="flex flex-shrink-0 flex-row flex-nowrap items-center gap-8">
            <p className="clip-f-l text-nowrap">
                {year}yo Software engineer • designer
            </p>
            <div className="overflow-clip">
                <div className="carousel-t-l flex flex-shrink-0 flex-row flex-nowrap gap-8">
                    {Array.from({ length: 26 }, (_, i) => (
                        <Icon
                            key={i}
                            size={64}
                            // className="clip-f-r"
                            icon="arrow-left"
                        />
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
