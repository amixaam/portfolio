import React, { useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import Icon from "../../../public/icons/Icon";

const educationData = [
    {
        name: "Vidzeme Technology and Design Vocational School",
        year: "2021-2025",
    },
    {
        name: "Alfrēda Kalniņa Cesis Music School",
        year: "2014-2020",
    },
    {
        name: "Cesis Primary School No. 1",
        year: "2012-2021",
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
                <h2>{name}</h2>
            </div>
            <Icon
                icon={open ? "chevron-up" : "chevron-down"}
                stroke="transparent"
            />
        </button>
    );
};

export default Education;
