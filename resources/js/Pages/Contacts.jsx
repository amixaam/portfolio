import React from "react";
import ScreenLayout from "../Layouts/ScreenLayout";
import Icon from "../../../public/icons/Icon";

function Contacts() {
    return (
        <ScreenLayout
            title={"Contacts"}
            footer={<SpecialFooter />}
            forceScreen={true}
        >
            <div className="float-vertical relative -space-y-4 md:-space-y-1">
                {[...Array(7)].map((_, i) => (
                    <h3
                        key={i}
                        className={`${i % 2 === 0 ? "clip-f-l" : "clip-f-r"} top-0 select-none text-center text-4xl uppercase md:text-7xl md:leading-[0.73] lg:leading-[0.73] lg:text-8xl`}
                        style={{
                            opacity: 1 - i / 6.5,
                        }}
                    >
                        get in touch
                    </h3>
                ))}
            </div>
        </ScreenLayout>
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
];

const SpecialFooter = () => {
    return (
        <div
            className="flex flex-row items-center justify-center gap-8 *:flex-shrink-0 
						*:flex-grow-0 *:flex-nowrap *:text-nowrap *:text-[160px] lg:gap-32"
        >
            <h2 className="clip-f-l hidden select-none uppercase leading-[0.75] transition-all hover:text-secondary-light lg:block dark:hover:text-secondary-dark">
                Get in touch
            </h2>
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
                            className="transition-all hover:scale-90 hover:rounded-none hover:bg-secondary-dark hover:fill-text-dark lg:hover:p-4 dark:hover:bg-secondary-light  dark:hover:fill-text-light"
                        />
                    </a>
                ))}
            </div>
            <h2 className="clip-f-r hidden select-none  uppercase leading-[0.75] transition-all hover:text-secondary-light lg:block dark:hover:text-secondary-dark">
                Get in touch
            </h2>
        </div>
    );
};

export default Contacts;
