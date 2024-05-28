import React from "react";
import Icon from "../../../public/icons/Icon";
import { BoxLink } from "../Components/BoxLink";
import ScreenLayout from "../Layouts/ScreenLayout";

function About() {
    return (
        <ScreenLayout title="About">
            <div className="grid grid-rows-[1fr_2fr] gap-4 py-8 sm:grid-rows-[1fr_1fr] md:gap-24 md:py-16 lg:grid-cols-[1fr_2fr] lg:grid-rows-1 ">
                <div className="group relative max-h-fit">
                    <img
                        src="/images/me-2.webp"
                        alt="Me looking to the side, Sunset in the background"
                        className="absolute h-full w-full scale-x-[-1] rounded-50 object-cover md:h-fit xl:h-full"
                    />
                    <div className="group-hover:card-enter card absolute flex w-full items-center justify-end gap-2 rounded-t-50 bg-bg-light-50 px-12 py-3 md:py-6 dark:bg-bg-dark-50">
                        <Icon
                            icon="location"
                            stroke="transparent"
                            size={32}
                            minimise={true}
                        />
                        <p>Cēsis, Latvia</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 md:gap-8">
                    <div className="flex flex-row items-center gap-2 sm:gap-4 md:gap-8">
                        <h2 className="flex flex-row items-center gap-2 sm:gap-4 md:gap-8">
                            Hey! I'm Roberts{" "}
                            <Icon
                                icon="wave"
                                stroke="transparent"
                                fill="fill-link-light dark:fill-link-dark"
                                className="hand-wave"
                                minimise={true}
                            />
                        </h2>
                    </div>
                    <div className="blog-styles max-w-[800px] space-y-4 md:space-y-8">
                        <p>
                            I’m a passionate software engineer from Latvia,
                            always eager to learn. I play the piano and flute,
                            and have contributed to orchestral bands and choirs.
                        </p>
                        <p>
                            Programming has been my favorite activity since I
                            was 10, starting with Scratch and progressing to
                            Python, C#, PHP, JavaScript, and Kotlin. My
                            relentless pursuit of excellence drives my success.
                        </p>
                    </div>
                    <div className="grid gap-4 2xl:grid-cols-3 ">
                        <BoxLink icon="school" href={route("Education")}>
                            Education
                        </BoxLink>
                        <BoxLink icon="globe" href={route("Projects")}>
                            Projects
                        </BoxLink>
                        <BoxLink icon="link" href={route("Contacts")}>
                            Contact me
                        </BoxLink>
                    </div>
                </div>
            </div>
        </ScreenLayout>
    );
}

export default About;
