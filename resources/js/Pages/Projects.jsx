import React, { useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import Icon from "../../../public/images/icons/Icon";
import { BoxLink } from "../Components/BoxLink";
import { ImageCarousel } from "../Components/ImageCarousel";

const testData = [
    {
        name: "Flora",
        year: "2024",
        technologies: ["react", "expo", "typescript"],
        content: (
            <>
                <p>
                    Flora is an opinionated, design-first local music player
                    built with <a href="">React Native</a>. It combines the best
                    features from various music apps to create the perfect UI
                    and UX tailored to my preferences.
                </p>
                <p>
                    Key Technologies that are used are <a href="">Zustand</a>,{" "}
                    <a href="">React Native Track Player</a>,{" "}
                    <a href="">React Native Reanimated</a> and{" "}
                    <a href="">React router</a>.
                </p>
                <p>
                    My goal was to craft an exceptional user experience by
                    focusing on design and usability.
                </p>
            </>
        ),
        links: [
            {
                link: "https://github.com/amixaam/flora-remake",
                name: "GitHub repo",
            },
            {
                link: "",
                name: "Figma design",
            },
        ],
        images: [
            "images/flora-promo/promo-1",
            "images/flora-promo/promo-2",
            "images/flora-promo/promo-3",
            "images/flora-promo/promo-4",
        ],
    },
    {
        name: "Ruckas Muiža",
        year: "2023-2024",
        technologies: [
            "laravel",
            "alpine",
            "saas",
            "livewire",
            "php",
            "javascript",
        ],
        content: (
            <>
                <p>
                    Ruckas Muiža is a team project built using the Tallstack
                    framework for Ruckas Muiža. I took on the role of design
                    lead, ensuring the website’s aesthetics and user experience
                    were top-notch.
                </p>
                <p>
                    Key technologies used are <a href="">Laravel</a>,{" "}
                    <a href="">Alpinejs</a>, <a href="">Sass</a> and{" "}
                    <a href="">Livewire</a>.
                </p>
                <p>
                    Collaboratively created with a focus on elegant design and
                    functionality.
                </p>
            </>
        ),
        links: [
            {
                link: "https://www.ruckasmuiza.lv",
                name: "Website",
            },
            {
                link: "",
                name: "Figma design",
            },
        ],
        images: ["images/photo-gallery-promo/promo-3"],
    },
    {
        name: "ERASMUS + Lithuania youth exchange",
        year: "2023",
        technologies: [],
        content: (
            <p>
                Made with Inertia js, and with it’s unique design, it’s a wonder
                to explore the project all the time.
            </p>
        ),
        links: [
            {
                link: "https://github.com/amixaam/flora-remake",
                name: "GitHub repo",
            },
            {
                link: "",
                name: "Figma design",
            },
        ],
        images: ["images/photo-gallery-promo/promo-3"],
    },
    {
        name: "photo-gallery",
        year: "2024",
        technologies: [
            "laravel",
            "inertia",
            "php",
            "vite",
            "react",
            "javascript",
        ],
        content: (
            <>
                <p>
                    photo-gallery is a personal image gallery designed for
                    sharing and viewing photos. It features a unique design and
                    robust admin tools.
                </p>
                <p>
                    Key technologies used are <a href="">Laravel</a>,{" "}
                    <a href="">React</a>, <a href="">Inertiajs</a> and{" "}
                    <a href="">Tailwind</a>.
                </p>
                <p>Explore and enjoy the beautifully crafted interface.</p>
            </>
        ),
        links: [
            {
                link: "https://amixam.id.lv",
                name: "Website",
            },
            {
                link: "https://github.com/amixaam/flora-remake",
                name: "GitHub repo",
            },
            {
                link: "",
                name: "Figma design",
            },
        ],
        images: [
            "images/photo-gallery-promo/promo-1",
            "images/photo-gallery-promo/promo-2",
            "images/photo-gallery-promo/promo-3",
        ],
    },
    {
        name: "Typomancer",
        year: "2024",
        technologies: ["unity", "laravel", "stripe", "csharp", "php"],
        content: (
            <>
                <p>
                    Typomancer is an online Unity 2D endless dungeon runner
                    game. It features Laravel as the backend to manage logins,
                    leaderboards, and Stripe integration.
                </p>
                <p>
                    Key technologies used are <a href="">Unity</a>,{" "}
                    <a href="">Laravel</a> and <a href="">Stripe</a>.
                </p>
                <p>Enjoy seamless gameplay with robust backend support.</p>
            </>
        ),
        links: [
            {
                link: "https://github.com/amixaam/flora-remake",
                name: "GitHub repo",
            },
        ],
        images: ["images/photo-gallery-promo/promo-3"],
    },
    {
        name: "CENE",
        year: "2024",
        technologies: ["laravel"],
        content: (
            <p>
                Made with Inertia js, and with it’s unique design, it’s a wonder
                to explore the project all the time.
            </p>
        ),
        links: [
            {
                link: "https://github.com/amixaam/flora-remake",
                name: "GitHub repo",
            },
            {
                link: "",
                name: "Figma design",
            },
        ],
        images: ["images/photo-gallery-promo/promo-3"],
    },
];

function Projects() {
    const [openProject, setOpenProject] = useState(null);
    return (
        <MainLayout title={"Projects"}>
            <div className="flex flex-col gap-16 md:gap-32">
                {testData.map((project, key) => (
                    <ProjectItem
                        key={key}
                        project={project}
                        open={key === openProject}
                        closeProject={() => setOpenProject(null)}
                        openProject={() => setOpenProject(key)}
                    />
                ))}
            </div>
        </MainLayout>
    );
}

const ProjectItem = ({ project, open = false, closeProject, openProject }) => {
    const { name, year, technologies, content, links, images } = project;

    const toggleOpen = () => {
        if (open) {
            closeProject();
        } else {
            openProject();
            setTimeout(function () {
                document.getElementById(project.name).scrollIntoView();
            }, 300);
        }
    };

    return (
        <div className="scroll-mt-16 space-y-2" id={project.name}>
            {/* top bar */}
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
                    <h2 className="text-start">{name}</h2>
                </div>
                <Icon
                    icon={open ? "chevron-up" : "chevron-down"}
                    stroke="transparent"
                />
            </button>

            {/* content */}

            {open && (
                <div className="overflow-hidden">
                    <div className="clip-f-t row-auto grid gap-8 lg:grid-cols-2 lg:grid-rows-1 lg:gap-24">
                        <div className="order-2 space-y-8 lg:order-1">
                            {/* technologies */}
                            <div className="flex flex-row gap-4">
                                {technologies.map((tech, key) => (
                                    <img
                                        key={key}
                                        src={`images/icons/${tech}.svg`}
                                        alt={`${tech} logo`}
                                        className="rounded-icon"
                                    />
                                ))}
                            </div>

                            {/* text */}
                            <div className="blog-styles max-w-[600px]">
                                {content}
                            </div>

                            {/* links */}
                            <div className="space-y-4">
                                {links.map((url, key) => (
                                    <BoxLink
                                        icon="link"
                                        href={url.link}
                                        size={48}
                                        key={key}
                                        outside={true}
                                    >
                                        {url.name}
                                    </BoxLink>
                                ))}
                            </div>
                        </div>

                        {/* image */}
                        <div className="order-1 flex h-fit items-start lg:order-2">
                            <ImageCarousel images={images} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
