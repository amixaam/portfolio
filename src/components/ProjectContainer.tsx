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
			year: number;
			live: boolean;
			technologies: string[];
			links?: {
				website?: string;
				github?: string;
			};
			images: {
				darkMode?: boolean;
				images: ImageProps[];
			};
			content: string;
		};
	}[];
}

export function Accordion({ projects }: Props) {
	const Title = ({
		year,
		title,
		live,
	}: {
		year: number;
		title: string;
		live: boolean;
	}) => {
		return (
			<div className="flex flex-row gap-4 items-center">
				<p className="opacity-75">{year}</p>
				<h3>{title}</h3>
				{live && (
					<div className="hidden rounded-full  border-2 border-link-light bg-bg-light px-5 py-2 md:flex dark:border-link-light dark:bg-secondary-dark">
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
				className="group flex h-fit w-full flex-row items-center gap-4 
                        transition-all hover:ml-2 focus:ml-2 active:ml-4 md:w-fit"
			>
				<img
					src={`/icons/outgoing.svg`}
					alt="Outgoing icon"
					className="size-10 rounded-md bg-secondary-light"
				/>
				<p>{type}</p>
			</a>
		);
	};

	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

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

	return (
		<BaseAccordion
			type="single"
			defaultValue="item-0"
			collapsible
			className="w-full"
		>
			{projects.map((item, i) => {
				return (
					<AccordionItem key={i} value={`item-${i.toFixed()}`}>
						<AccordionTrigger>
							<Title
								live={item.data.live}
								title={item.data.title}
								year={item.data.year}
							/>
						</AccordionTrigger>
						<AccordionContent className="md:grid max-w-[100vw] md:grid-cols-2 space-y-8">
							<div className="md:space-y-4">
								<div className="flex flex-row gap-2">
									{item.data.technologies.map(
										(tech, index) => (
											<img
												src={tech}
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
								<section>
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
							<div className="max-w-sm justify-self-center self-center">
								<Carousel
									opts={{
										loop: true,
									}}
									setApi={setApi}
								>
									<CarouselContent>
										{item.data.images.images.map(
											(image, index) => (
												<CarouselItem key={index}>
													<img
														src={image.src}
														alt={
															item.id +
															" product"
														}
														className="rounded-lg"
													/>
												</CarouselItem>
											),
										)}
									</CarouselContent>
									<CarouselNext className="right-4" />
									<CarouselPrevious className="left-4" />
								</Carousel>
								<div className="flex flex-row gap-2 justify-center">
									{Array.from({ length: count }).map(
										(_, i) => (
											<p
												className={`text-4xl font-bold ${i + 1 === current ? "text-text-light" : "text-muted-foreground"}`}
											>
												•
											</p>
										),
									)}
								</div>
							</div>
						</AccordionContent>
					</AccordionItem>
				);
			})}
		</BaseAccordion>
	);
}
