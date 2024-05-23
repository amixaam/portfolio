import React from "react";
import Icon from "../../../public/icons/Icon";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "@inertiajs/inertia-react";
import MainLayout from "../Layouts/MainLayout";

function Landing() {
    return (
        <MainLayout>
            <main className="my-8 grid flex-1 grid-cols-2">
                <div className="clip-f-b flex flex-col justify-center gap-8">
                    <h2 className="">Table of contents</h2>

                    <ul className=" ml-16 flex flex-col gap-8">
                        <BoxLink icon={"person"} href={route("About")}>
                            About me
                        </BoxLink>
                        <BoxLink icon={"globe"} href={route("Projects")}>
                            Projects
                        </BoxLink>
                        <BoxLink icon={"school"} href={route("Education")}>
                            Education
                        </BoxLink>
                        <BoxLink icon={"link"} href={route("Contacts")}>
                            Contacts
                        </BoxLink>
                    </ul>
                </div>
                <div className="relative">
                    <div className="clip-f-b aspect-portrait group absolute -top-[15%] right-0  w-[80%] transition-all duration-300">
                        <div className="rounded-t-50 group-hover:card-enter card absolute flex w-full items-center justify-end gap-2 bg-bg-light-50 px-16 py-8  transition-all">
                            <Icon
                                icon="location"
                                stroke="transparent"
                                size={32}
                            />
                            <p>Prague, Czech Republic</p>
                        </div>
                        <img
                            src="/images/me.webp"
                            alt="Me in posing in Prague, Czech Republic"
                            className=" rounded-t-50 h-full w-full object-cover"
                        />
                    </div>
                </div>
            </main>
        </MainLayout>
    );
}

const BoxLink = ({ href, children, icon }) => {
    return (
        <Link
            href={href}
            onPointerDown={() => {
                console.log("yoo");
            }}
            className="group flex h-fit w-fit flex-row items-center gap-8 transition-all hover:ml-4"
        >
            <Icon className="rounded-icon p-2" icon={icon} />
            <p>{children}</p>
            <Icon
                stroke="transparent"
                size={48}
                icon="arrow-right"
                className="scale-x-0 transition-all group-hover:scale-x-100"
            />
        </Link>
    );
};

export default Landing;
