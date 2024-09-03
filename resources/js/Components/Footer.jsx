import React from "react";
import Icon from "../../../public/images/icons/Icon";
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
                            // className="clip-f-r"
                            icon="arrow-left"
                            className="size-10 sm:size-14 md:size-[64px]"
                        />
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
