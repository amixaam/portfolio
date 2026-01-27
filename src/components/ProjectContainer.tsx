import {
	Accordion as BaseAccordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface ImageProps {
	src: string;
	width: number;
	height: number;
	format: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg" | "avif";
}

interface Props {
	projects: {
		id: string;
		body?: string;
		collection: "projects";
		rendered?: any;
		filePath?: string;
		data: {
			title: string;
			date: string; // Format: DD-MM-YYYY
			live: boolean;
			technologies: string[];
			links?: {
				website?: string;
				github?: string;
			};
			images: {
				light: ImageProps[];
				dark?: ImageProps[];
			};
			content: string;
		};
	}[];
}

export function Accordion({ projects }: Props) {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
		setIsDarkMode(darkModeQuery.matches);

		const darkModeListener = (e: MediaQueryListEvent) => {
			setIsDarkMode(e.matches);
		};
		darkModeQuery.addEventListener("change", darkModeListener);

		return () => {
			darkModeQuery.removeEventListener("change", darkModeListener);
		};
	}, []);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	const getImageForMode = (
		lightImage: ImageProps,
		index: number,
		darkImages?: ImageProps[],
	) => {
		if (isDarkMode && darkImages && darkImages[index]) {
			return darkImages[index];
		}
		return lightImage;
	};

	const formatDate = (dateString: string) => {
		const [day, month, year] = dateString.split("-");
		const date = new Date(`${year}-${month}-${day}`);
		return new Intl.DateTimeFormat("en-US", {
			year: "numeric",
		}).format(date);
	};

	const Title = ({
		date,
		title,
		live,
	}: {
		date: string;
		title: string;
		live: boolean;
	}) => {
		return (
			<div className="flex flex-row gap-4 items-center">
				<h2 className="text-3xl group-hover:underline">{title}</h2>
				{live && (
					<div className="hidden rounded-full border-2 border-link-light bg-bg-light px-5 py-2 md:flex dark:border-link-light dark:bg-secondary-dark">
						<p className="text-md font-semibold leading-none">
							Live demo
						</p>
					</div>
				)}
			</div>
		);
	};

	const Link = ({
		href,
		type,
	}: {
		href: string;
		type: "Website" | "GitHub";
	}) => {
		return (
			<a
				href={href}
				className="group underline md:no-underline inline-flex items-center gap-2 relative transition-transform hover:translate-x-1 hover:underline focus:translate-x-1 active:translate-x-3"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					className="ic-link"
				>
					<path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
				</svg>
				{type}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					className="scale-x-0 transition-all group-hover:scale-x-100 group-focus:scale-x-100 fill-text-light dark:fill-text-dark"
				>
					<path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
				</svg>
			</a>
		);
	};

	return (
		<BaseAccordion
			type="single"
			defaultValue="item-0"
			collapsible
			className="w-full dark:dark"
		>
			{projects.map((item, i) => {
				return (
					<AccordionItem key={i} value={`item-${i.toFixed()}`}>
						<AccordionTrigger className="hover:no-underline group svg-larger">
							<Title
								live={item.data.live}
								title={item.data.title}
								date={item.data.date}
							/>
						</AccordionTrigger>
						<AccordionContent className="md:grid max-w-[100vw] md:grid-cols-2 space-y-8">
							<div className="md:space-y-4">
								<div className="flex flex-row gap-2 mb-4">
									{item.data.technologies.map(
										(tech, index) => (
											<img
												key={index}
												src={tech}
												className="size-8 md:size-10 rounded-sm"
												alt="Technology icon"
											/>
										),
									)}
								</div>
								<article
									className="blog-styles"
									dangerouslySetInnerHTML={{
										__html: item.rendered.html,
									}}
								/>
								<section className="flex flex-col gap-4 py-4 md:py-0">
									{item.data.links?.website && (
										<Link
											href={item.data.links.website}
											type="Website"
										/>
									)}
									{item.data.links?.github && (
										<Link
											href={item.data.links.github}
											type="GitHub"
										/>
									)}
								</section>
							</div>
							<div className="max-w-sm !mt-0 justify-self-end">
								<Carousel
									opts={{
										loop: true,
									}}
									setApi={setApi}
								>
									<CarouselContent>
										{item.data.images.light.map(
											(image, index) => (
												<CarouselItem key={index}>
													<img
														src={
															getImageForMode(
																image,
																index,
																item.data.images
																	.dark,
															).src
														}
														height={400}
														width={400}
														loading="eager"
														alt={
															item.id + " product"
														}
														className="rounded-lg"
													/>
												</CarouselItem>
											),
										)}
									</CarouselContent>
									<CarouselNext className="right-4 dark:*:stroke-white" />
									<CarouselPrevious className="left-4 dark:*:stroke-white" />
									<div className="flex flex-row gap-2 justify-center absolute bottom-0 w-full">
										{Array.from({ length: count }).map(
											(_, i) => (
												<p
													key={i}
													className={`select-none text-4xl font-bold ${i + 1 === current ? "text-text-dark" : "text-muted-foreground"}`}
												>
													•
												</p>
											),
										)}
									</div>
								</Carousel>
							</div>
						</AccordionContent>
					</AccordionItem>
				);
			})}
		</BaseAccordion>
	);
}
