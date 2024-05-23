import React from "react";
import { IconPaths } from "./IconList";

function Icon({
    icon = "arrow-right",
    fill = "fill-text-light",
    stroke = "bg-secondary-light",
    className = "",
    size = 64,
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={`${size}px`}
            viewBox="0 -960 960 960"
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
