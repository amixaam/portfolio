import React from "react";
import Icon from "../../../public/images/icons/Icon";
import MainLayout from "../Layouts/MainLayout";

function Contacts() {
    return (
        <MainLayout title={"Contacts"} footer={<SpecialFooter />}>
            <div className="float-vertical relative flex w-full flex-col justify-center -space-y-4 md:-space-y-1">
                {[...Array(7)].map((_, i) => (
                    <h3
                        key={i}
                        className={`${i % 2 === 0 ? "clip-f-l" : "clip-f-r"} top-0 select-none text-center text-4xl uppercase md:text-7xl md:leading-[0.73] lg:text-7xl lg:leading-[0.74]`}
                        style={{
                            opacity: 1 - i / 6.5,
                        }}
                    >
                        get in touch
                    </h3>
                ))}
            </div>
        </MainLayout>
    );
}

const links = [
    {
        icon: "instagram",
        url: "https://instagram.com/robisnis",
    },
    {
        icon: "mail",
        url: "mailto:robertobrinko@gmail.com",
    },
    {
        icon: "github",
        url: "https://github.com/amixaam",
    },
    {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/robertsbrinkis/",
    },
    {
        icon: "cv",
        url: "https://seafile.amixam.id.lv/f/f580a0cde02c419aa4e0/",
    },
];

const SpecialFooter = () => {
    return (
        <div
            className="flex flex-row items-center justify-center gap-8 *:flex-shrink-0 
						*:flex-grow-0 *:flex-nowrap lg:gap-32"
        >
            {/* <LargeText clip="clip-f-l" /> */}
            <div className="clip-f-b group flex flex-row gap-6">
                {links.map((icon, i) => (
                    <a
                        className="*:rounded-icon *:p-1 md:*:p-3"
                        target="_blank"
                        href={icon.url}
                        key={i}
                    >
                        <Icon
                            icon={icon.icon}
                            size={80}
                            minimise={true}
                            className="transition-all hover:scale-90 hover:bg-secondary-dark hover:fill-text-dark lg:hover:p-4 dark:hover:bg-secondary-light  dark:hover:fill-text-light"
                        />
                    </a>
                ))}
            </div>
            {/* <LargeText clip="clip-f-r" /> */}
        </div>
    );
};

function LargeText({ text = "get in touch", clip = "" }) {
    return (
        <h2
            className={`${clip} hidden select-none text-nowrap text-[6.5rem] uppercase leading-[0.75] transition-all lg:block`}
        >
            {text}
        </h2>
    );
}

export default Contacts;
