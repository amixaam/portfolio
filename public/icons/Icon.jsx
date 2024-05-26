import React from "react";
import { IconPaths, smallIcons } from "./IconList";

function Icon({
    icon = "arrow-right",
    fill = "fill-text-light dark:fill-text-dark",
    stroke = "bg-secondary-light dark:bg-secondary-dark",
    className = "",
    size = 64,
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={`${size}px`}
            viewBox={smallIcons.includes(icon) ? "-4 -4 32 32" : "0 -960 960 960"}
            width={`${size}px`}
            className={`${fill} ${stroke} ${className} flex-shrink-0`}
        >
            <path
                d={IconPaths[icon] ? IconPaths[icon] : IconPaths["arrow-right"]}
            />
        </svg>
    );
}

export default Icon;
