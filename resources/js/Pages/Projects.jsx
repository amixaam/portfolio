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
];

function Projects() {
    return (
        <MainLayout title={"Projects"}>
            <div className="space-y-32">
            {testData.map((project, key) => (
                <ProjectItem project={project} key={key} />
            ))}

            </div>
        </MainLayout>
    );
}

const ProjectItem = ({ project }) => {
    const { name, year, technologies, content, links, images } = project;

    return (
        <div className="grid grid-cols-2 gap-6">
            {/* content */}
            <div className="clip-f-b space-y-8">
                <div className="space-y-4">
                    {/* title, year */}
                    <div className="flex flex-row items-center gap-8">
                        <Icon />
                        <h2>{name}</h2>
                        <p className="opacity-70">{year}</p>
                    </div>
                    {/* technologies */}
                    <div className="flex flex-row gap-4 pl-24 *:drop-shadow-lg">
                        {technologies.map((tech, key) => (
                            <img
                                key={key}
                                src={`icons/${tech}.svg`}
                                alt={`${tech} logo`}
                                className="rounded-icon"
                            />
                        ))}
                    </div>
                </div>

                {/* text */}
                <div className="blog-styles pl-24">{content}</div>

                {/* links */}
                <div className="space-y-4 pl-24">
                    {links.map((url, key) => (
                        <BoxLink icon="link" href={url.link} key={key}>
                            {url.name}
                        </BoxLink>
                    ))}
                </div>
            </div>

            {/* image */}
            <div className="flex items-center justify-center">
                {/* make this into a seperate component */}
                <ImageCarousel images={images} />
            </div>
        </div>
    );
};

export default Projects;
