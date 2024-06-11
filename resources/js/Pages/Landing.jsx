import React from "react";
import Icon from "../../../public/images/icons/Icon";
import { BoxLink } from "../Components/BoxLink";
import MainLayout from "../Layouts/MainLayout";

function Landing() {
    return (
        <MainLayout>
            <main className="grid flex-1 lg:grid-cols-2">
                <div className="clip-f-b flex flex-col justify-center gap-4">
                    <h2 className="hidden md:block">Table of contents</h2>

                    <ul className="ml-4 flex flex-col gap-4 md:ml-16 md:gap-6">
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
            </main>
            <div className="clip-f-b group absolute right-0 top-0 hidden aspect-portrait h-[80%] lg:block">
                <div className="group-hover:card-enter card absolute flex w-full items-center justify-end gap-2 rounded-t-50 bg-bg-light-50 px-14 py-8 transition-all  dark:bg-bg-dark-50">
                    <Icon icon="location" stroke="transparent" size={32} />
                    <p>Prague, Czech Republic</p>
                </div>
                <img
                    src="/images/me.webp"
                    alt="Me posing in Prague, Czech Republic"
                    className=" h-full w-full rounded-50 object-cover"
                />
            </div>
        </MainLayout>
    );
}

export default Landing;
