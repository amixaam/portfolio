import React from "react";
import MainLayout from "../Layouts/MainLayout";
import Icon from "../../../public/icons/Icon";
import { BoxLink } from "../Components/BoxLink";
import ScreenLayout from "../Layouts/ScreenLayout";

function About() {
    return (
        <ScreenLayout title="About">
            <div className="grid h-full grid-cols-[2fr_1fr] gap-24 py-16 ">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-row items-center gap-4">
                        <h2>Hey! My name is Roberts </h2>
                        <Icon
                            icon="wave"
                            stroke="transparent"
                            fill="fill-link-light dark:fill-link-dark"
                            className="hand-wave"
                        />
                    </div>
                    <div className="blog-styles space-y-8">
                        <p>
                            I’m a motivated guy, that’s always up for learning
                            new things! I work well within a team of people, and
                            i have for most of my life!
                        </p>
                        <p>
                            I’m musical - I’ve played the piano and flute for
                            many years, contributed in orchestral bands and
                            choirs.
                        </p>
                        {/* <p>
                            I’m relentless - Programming has been my favorite
                            thing since i was 10 years old. I started with the
                            child-friendly Scratch, and moved on to bigger
                            languages, such as Python, C#, PHP, JavaScript and
                            Kotlin.
                        </p> */}
                    </div>
                    <div className="flex flex-col gap-4 ">
                        <BoxLink icon="school" href={route("Education")}>My education</BoxLink>
                        <BoxLink icon="globe" href={route("Projects")}>My projects</BoxLink>
                        <BoxLink icon="link" href={route("Contacts")}>Contact me</BoxLink>
                    </div>
                </div>

                <div className="group relative max-h-fit ">
                    <img
                        src="/images/me-2.webp"
                        alt="Me looking to the side, Sunset in the background"
                        className="absolute h-full w-full rounded-50 object-cover"
                    />
                    <div className="group-hover:card-enter card absolute flex w-full items-center justify-end gap-2 rounded-t-50 bg-bg-light-50 px-12 py-6 dark:bg-bg-dark-50">
                        <Icon icon="location" stroke="transparent" size={32} />
                        <p>Cēsis, Latvia</p>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export default About;
