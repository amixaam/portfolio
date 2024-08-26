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
                    built with <p className="highlight">React Native</p>. It
                    combines the best features from various music apps to create
                    the perfect UI and UX tailored to my preferences.
                </p>
                <p>
                    Key Technologies that are used are{" "}
                    <p className="highlight">Zustand</p>,{" "}
                    <p className="highlight">React Native Track Player</p>,{" "}
                    <p className="highlight">React Native Reanimated</p> and{" "}
                    <p className="highlight">React router</p>.
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
                    Key technologies used are{" "}
                    <p className="highlight">Laravel</p>,{" "}
                    <p className="highlight">Alpinejs</p>,{" "}
                    <p className="highlight">Sass</p> and{" "}
                    <p className="highlight">Livewire</p>.
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
        images: [
            "images/ruckas-muiza-promo/promo-1",
            "images/ruckas-muiza-promo/promo-2",
            "images/ruckas-muiza-promo/promo-3",
            "images/ruckas-muiza-promo/promo-4",
        ],
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
                    Key technologies used are{" "}
                    <p className="highlight">Laravel</p>,{" "}
                    <p className="highlight">React</p>,{" "}
                    <p className="highlight">Inertiajs</p> and{" "}
                    <p className="highlight">Tailwind</p>.
                </p>
                <p>Explore and enjoy the beautifully crafted interface.</p>
            </>
        ),
        links: [
            {
                link: "https://photos.amixam.id.lv",
                name: "Website",
                type: "demo",
            },
            {
                link: "https://github.com/amixaam/photo-gallery",
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
        name: "Kuriyama bot",
        year: "2024",
        technologies: [],
        content: (
            <>
                <p>wazzuh</p>
            </>
        ),
        links: [],
        images: [],
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
                    Key technologies used are <p className="highlight">Unity</p>
                    , <p className="highlight">Laravel</p> and{" "}
                    <p className="highlight">Stripe</p>.
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
        images: [
            "images/typomancer-promo/promo-1",
            "images/typomancer-promo/promo-2",
        ],
    },
    {
        name: "CENE",
        year: "2024",
        technologies: ["laravel", "react", "stripe", "php", "javascript"],
        content: (
            <>
                <p>
                    CENE is a ticket-selling platform for theatrical and cinema
                    releases. Users can view new and upcoming events, select
                    seats, leave reviews, and download PDFs of their ticket QR
                    codes.
                </p>
                <p>
                    Key technologies used are <p className="highlight">React</p>
                    , <p className="highlight">Laravel</p> and{" "}
                    <p className="highlight">Stripe</p>.
                </p>
                <p>
                    Experience a seamless way to purchase and manage event
                    tickets.
                </p>
            </>
        ),
        links: [
            {
                link: "https://github.com/amixaam/cene",
                name: "GitHub repo",
            },
            {
                link: "",
                name: "Figma design",
            },
        ],
        images: [
            "images/cene-promo/promo-1",
            "images/cene-promo/promo-2",
            "images/cene-promo/promo-3",
            "images/cene-promo/promo-4",
        ],
    },
];

function Projects({ projects }) {
    const [openProject, setOpenProject] = useState(null);
    console.log(projects[0]);

    return (
        <MainLayout title={"Projects"}>
            <div className="flex w-full flex-col gap-16 md:gap-32">
                {projects.map((project, key) => (
                    <ProjectItem
                        key={key}
                        project={project}
                        open={key === openProject}
                        hasDemo={project.hasDemo}
                        closeProject={() => setOpenProject(null)}
                        openProject={() => setOpenProject(key)}
                    />
                ))}
            </div>
        </MainLayout>
    );
}

const LiveDemoTag = () => {
    return (
        <div className="flex rounded-full border-2 border-link-light bg-bg-light px-5 py-2 dark:border-link-light dark:bg-secondary-dark">
            <p className="text-md font-semibold leading-none">Live demo</p>
        </div>
    );
};

const ProjectItem = ({
    project,
    open = false,
    hasDemo = false,
    closeProject,
    openProject,
}) => {
    const { name, year, technologies, content, project_links, images } =
        project;

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
        <div className="scroll-mt-32 space-y-2" id={project.name}>
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
                <div className="flex flex-row items-center gap-4 md:gap-8">
                    <p className="w-[5ch] text-start leading-none opacity-70">
                        {year}
                    </p>
                    <h2 className="text-start">{name}</h2>
                    {hasDemo && <LiveDemoTag />}
                </div>
                <Icon
                    icon={open ? "chevron-up" : "chevron-down"}
                    stroke="transparent"
                    className="scale-50 md:scale-100"
                />
            </button>

            {open && (
                <div className="overflow-hidden">
                    <div className="clip-f-t row-auto grid gap-8 lg:grid-cols-2 lg:grid-rows-1 lg:gap-24">
                        <div className="order-2 space-y-8 lg:order-1">
                            {/* technologies */}
                            <div className="flex flex-row gap-4">
                                {technologies.map((tech, key) => (
                                    <img
                                        key={key}
                                        src={tech.url}
                                        alt={tech.name}
                                        className="size-8 rounded-sm md:size-12 md:rounded-icon"
                                    />
                                ))}
                            </div>

                            {/* content */}
                            <div
                                className="blog-styles max-w-[600px]"
                                dangerouslySetInnerHTML={{
                                    __html: project.content,
                                }}
                            ></div>

                            {/* links */}
                            <div className="space-y-4">
                                {project_links.map((link, key) => (
                                    <BoxLink
                                        icon="link"
                                        href={link.redirect}
                                        size={48}
                                        key={key}
                                        outside={true}
                                    >
                                        {link.title}{" "}
                                        {link.type === "demo" ? "(live)" : ""}
                                    </BoxLink>
                                ))}
                            </div>
                        </div>

                        {/* image */}
                        <div className="order-1 flex h-2/3 w-full justify-end px-8 lg:order-2">
                            <ImageCarousel images={images} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
