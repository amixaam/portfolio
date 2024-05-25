import React, { useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import Icon from "../../../public/icons/Icon";
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
                    Flora is an opinionated and design-first local music player,
                    made with <a href="">React Native</a>.
                </p>
                <p>
                    Some of the main React / Native libraries that are used were{" "}
                    <a href="">Zustand</a>,{" "}
                    <a href="">React Native Track Player</a>,{" "}
                    <a href="">React Native Reanimated</a> and{" "}
                    <a href="">React router</a>.
                </p>
                <p>
                    My goal was to create the perfect UI and UX for myself
                    personally.
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
                    photo-gallery is a personal image gallery, for people to
                    view.
                </p>
                <p>
                    Made with Inertia js, and with it’s unique design, it’s a
                    wonder to explore the project all the time.
                </p>
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
            <div className="flex flex-col gap-32">
                {testData.map((project, key) => (
                    <ProjectItem
                        project={project}
                        open={key === openProject}
                        closeProject={() => setOpenProject(null)}
                        openProject={() => setOpenProject(key)}
                        key={key}
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
            >
                <div className="flex flex-row items-center gap-8">
                    <p className="w-[5ch] text-start leading-none opacity-70">
                        {year}
                    </p>
                    <h2>{name}</h2>
                </div>
                <button>
                    <Icon
                        icon={open ? "chevron-up" : "chevron-down"}
                        stroke="transparent"
                    />
                </button>
            </button>

            {/* content */}

            {open && (
                <div className="overflow-hidden">
                    <div className="clip-f-t grid grid-cols-2 gap-24">
                        <div className="space-y-8">
                            {/* technologies */}
                            <div className="flex flex-row gap-4">
                                {technologies.map((tech, key) => (
                                    <img
                                        key={key}
                                        src={`icons/${tech}.svg`}
                                        alt={`${tech} logo`}
                                        className="rounded-icon"
                                    />
                                ))}
                            </div>

                            {/* text */}
                            <div className="blog-styles">{content}</div>

                            {/* links */}
                            <div className="space-y-4">
                                {links.map((url, key) => (
                                    <BoxLink
                                        icon="link"
                                        href={url.link}
                                        size={48}
                                        key={key}
                                    >
                                        {url.name}
                                    </BoxLink>
                                ))}
                            </div>
                        </div>

                        {/* image */}
                        <div className="flex items-center">
                            {/* make this into a seperate component */}
                            <ImageCarousel images={images} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
