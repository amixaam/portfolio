import React from "react";
import Icon from "../../../public/images/icons/Icon";
import { BoxLink } from "./BoxLink";

function Menu({ open = false, toggleMenu }) {
    return (
        <div
            className={`${open && "menu-enter"} menu fixed left-0 top-0 z-50 h-screen w-full bg-bg-dark transition-all`}
        >
            <button className="absolute p-4" onMouseDown={toggleMenu}>
                <Icon
                    className="md:size-18 size-10 rounded-icon p-2 transition-all hover:-mt-2 sm:size-14"
                    icon="close"
                />
            </button>

            <div className="flex h-full flex-col justify-center">
                <ul className="ml-12 flex flex-col gap-6 md:ml-16">
                    <BoxLink icon={"menu"} href={route("Landing")} size={48}>
                        Home
                    </BoxLink>
                    <BoxLink icon={"person"} href={route("About")} size={48}>
                        About me
                    </BoxLink>
                    <BoxLink icon={"globe"} href={route("Projects")} size={48}>
                        Projects
                    </BoxLink>
                    <BoxLink
                        icon={"school"}
                        href={route("Education")}
                        size={48}
                    >
                        Education
                    </BoxLink>
                    <BoxLink icon={"link"} href={route("Contacts")} size={48}>
                        Contacts
                    </BoxLink>
                </ul>
            </div>
        </div>
    );
}

export default Menu;
