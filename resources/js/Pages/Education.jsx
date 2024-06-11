import React, { useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import Icon from "../../../public/images/icons/Icon";

const educationData = [
    {
        name: "Vidzeme Technology and Design Vocational School",
        year: "2021-2025",
        content: (
            <>
                <p>Optimal level education.</p>
                <p>
                    Learned C++, PHP, HTML, CSS, JavaScript and C#. Learned
                    frameworks like React, Svelte and Laravel. Networking, Linux
                    server setup and execution. Game design in Unity.
                </p>
                <p>
                    Outside activities: Competed in IT olympics. Went to the
                    programming club. Visited Companies like Printful and EIS
                    Group. Went to JS courses by Magebit. Participated in
                    ERASMUS + Lithuania youth exchange.
                </p>
            </>
        ),
    },
    {
        name: "Cesis Primary School No. 1",
        year: "2012-2021",
        content: (
            <>
                <p>Primary education.</p>
                <p>
                    Outside activities: Choir, Orchestra, Flute play.
                    Participated in the Latvian Song and Dance Festival
                </p>
            </>
        ),
    },
    {
        name: "Alfrēda Kalniņa Cesis Music School",
        year: "2014-2020",
        content: (
            <>
                <p>
                    Music literature, Music theory, piano play, flute play,
                    flute ansamble.
                </p>
            </>
        ),
    },
];

function Education() {
    const [openEducation, setOpenEducation] = useState(null);

    return (
        <MainLayout title="Education">
            {educationData.map((education, key) => (
                <EducationItem
                    key={key}
                    education={education}
                    open={key === openEducation}
                    closeEducation={() => setOpenEducation(null)}
                    openEducation={() => setOpenEducation(key)}
                />
            ))}
        </MainLayout>
    );
}

const EducationItem = ({
    education,
    open = false,
    closeEducation,
    openEducation,
}) => {
    const { name, year, content } = education;

    const toggleOpen = () => {
        if (open) {
            closeEducation();
        } else {
            openEducation();
            setTimeout(function () {
                document.getElementById(name).scrollIntoView();
            }, 300);
        }
    };

    return (
        <div className="scroll-mt-16 space-y-2" id={name}>
            <button
                onMouseDown={toggleOpen}
                className="flex w-full flex-row items-center justify-between"
                // keyboard support
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        toggleOpen();
                    }
                }}
                tabIndex={0}
            >
                <div className="flex flex-row items-center gap-8">
                    <p className="w-[5ch] text-start leading-none opacity-70">
                        {year}
                    </p>
                    <h2 className="text-start md:text-3xl xl:text-5xl">
                        {name}
                    </h2>
                </div>
                <Icon
                    icon={open ? "chevron-up" : "chevron-down"}
                    stroke="transparent"
                />
            </button>
            {open && (
                <div className="overflow-hidden">
                    <div className="clip-f-t grid grid-cols-2 gap-8">
                        <div className="blog-styles w-full">
                            {content}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Education;
