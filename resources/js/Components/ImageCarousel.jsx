import { useEffect, useState } from "react";
import Icon from "../../../public/images/icons/Icon";

export const ImageCarousel = ({ images = [] }) => {
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        const listener = (event) => {
            setSelectedImage(selectedImage);
            console.log("changed theme!", event);
        };

        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", listener);
        window
            .matchMedia("(prefers-color-scheme: light)")
            .addEventListener("change", listener);
    }, []);

    return (
        <div className="relative aspect-square lg:w-[800px]">
            <div className="relative aspect-square overflow-hidden rounded-50">
                <div
                    className="flex flex-shrink-0  flex-grow-0 flex-row transition-transform duration-300 ease-snappy"
                    style={{
                        transform: `translateX(-${selectedImage * 100}%)`,
                    }}
                >
                    {images.map((image, key) => (
                        <img
                            src={
                                window.matchMedia &&
                                window.matchMedia(
                                    "(prefers-color-scheme: dark)",
                                ).matches
                                    ? `${image}-dark.png`
                                    : `${image}.png`
                            }
                            alt=""
                            className="clip-f-t"
                            key={key}
                        />
                    ))}
                </div>
            </div>
            <CarouselUI
                images={images}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
            />
        </div>
    );
};

const CarouselUI = ({ images, selectedImage, setSelectedImage }) => {
    // move images one by one
    const movePos = (i) => {
        const nextIndex = (selectedImage + i + images.length) % images.length;
        setSelectedImage(nextIndex);
    };

    // move to any image
    const changePos = (i) => {
        setSelectedImage(i);
    };

    return (
        <>
            <div className="absolute bottom-0 top-0 flex h-full w-full items-center">
                <button
                    className="absolute left-2 h-fit transition-all hover:scale-95 active:left-0 active:scale-90 3xl:-left-8 3xl:active:-left-9"
                    onMouseDown={() => movePos(-1)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            event.preventDefault();
                            movePos(-1);
                        }
                    }}
                >
                    <Icon
                        icon="arrow-left"
                        size={64}
                        className="rounded-icon"
                        minimise={true}
                    />
                </button>
                <button
                    className="absolute right-2 h-fit transition-all hover:scale-95 active:right-0 active:scale-90 3xl:-right-8 3xl:active:-right-9"
                    onMouseDown={() => movePos(1)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            event.preventDefault();
                            movePos(1);
                        }
                    }}
                >
                    <Icon
                        icon="arrow-right"
                        size={64}
                        className="rounded-icon"
                        minimise={true}
                    />
                </button>
            </div>
            <div className="absolute bottom-4 flex w-full justify-center">
                <div className="flex gap-4 rounded-full bg-secondary-light px-6 py-2 dark:bg-secondary-dark">
                    {images.map((image, i) => (
                        <button
                            key={i}
                            onMouseDown={() => changePos(i)}
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    changePos(i);
                                }
                            }}
                            className="group -my-3 lg:-my-4"
                        >
                            <h3
                                className={`${i === selectedImage ? "text-text-light dark:text-text-dark" : "text-bg-dark-50 dark:text-bg-light-50"}  text-4xl transition-all group-hover:scale-90 group-hover:brightness-200 group-active:scale-75 lg:text-6xl`}
                            >
                                •
                            </h3>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};
