import React from "react";
import Icon from "../../../public/icons/Icon";
import { BoxLink } from "../Components/BoxLink";
import ScreenLayout from "../Layouts/ScreenLayout";

function Landing() {
    return (
        <ScreenLayout forceScreen={true}>
            <main className="grid flex-1 lg:grid-cols-2">
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
            </main>
            <div className="relative hidden xl:block">
                <div className="clip-f-b group absolute -top-[35rem] 2xl:-top-[38rem] right-0 aspect-portrait w-[40%] transition-all duration-300">
                    <div className="group-hover:card-enter card absolute flex w-full items-center justify-end gap-2 rounded-t-50 bg-bg-light-50 px-14 py-8 transition-all  dark:bg-bg-dark-50">
                        <Icon icon="location" stroke="transparent" size={32} />
                        <p>Prague, Czech Republic</p>
                    </div>
                    <img
                        src="/images/me.webp"
                        alt="Me posing in Prague, Czech Republic"
                        className=" h-full w-full rounded-50 2xl:rounded-b-none object-cover"
                    />
                </div>
            </div>
        </ScreenLayout>
    );
}

export default Landing;