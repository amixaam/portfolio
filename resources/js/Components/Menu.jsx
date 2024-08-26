import React from "react";
import Icon from "../../../public/images/icons/Icon";

function Menu({ open = false, toggleMenu }) {
    return (
        <div
            className={`${open && "menu-enter"} menu absolute left-0 top-0 z-50 h-screen w-full bg-bg-dark transition-all`}
        >
            <button className="p-4" onMouseDown={toggleMenu}>
                <Icon icon="close" />
            </button>
        </div>
    );
}

export default Menu;
