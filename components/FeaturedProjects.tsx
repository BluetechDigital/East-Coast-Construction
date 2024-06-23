"use client";

// Import
import {
	fadeInUp,
	stagger,
	initial,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import Link from "next/link";
import Image from "next/image";
import useWindowSize from "@/Hooks/useWindowSize";
import {useGlobalContext} from "@/context/global";
import {LazyMotion, domMax, motion} from "framer-motion";
import {FC, Fragment, useEffect, useRef, useState} from "react";
import {IDevelopmentsImage, IFeaturedProjects} from "@/types/components";

// Components
import DevelopmentsSlideCard from "@/components/Cards/DevelopmentsSlideCard";

const FeaturedProjects: FC<IFeaturedProjects> = ({
	title,
	subtitle,
	buttonLink,
	lastSlideImage,
}) => {
	const {width} = useWindowSize();
	const globalContext = useGlobalContext();
	const [activeSlide, setActiveSlide] = useState(0);
	const [largeTranslate, setLargeTranslate] = useState(0);
	const largeSlideRef = useRef<HTMLDivElement | null>(null);
	const [activeImage, setActiveImage] = useState<IDevelopmentsImage | null>(
		null
	);

	const arrowHandler = (direction: "prev" | "next") => {
		if (direction === "prev") {
			if (activeSlide === 0) {
				return setActiveSlide(globalContext?.developments.length - 1);
			}

			return setActiveSlide(activeSlide - 1);
		}

		if (direction === "next") {
			if (activeSlide === globalContext?.developments.length - 1) {
				return setActiveSlide(0);
			}

			return setActiveSlide(activeSlide + 1);
		}
	};

	useEffect(() => {
		if (largeSlideRef.current) {
			setLargeTranslate(-(activeSlide * largeSlideRef.current.offsetWidth));
		}
	}, [activeSlide]);

	useEffect(() => {
		setActiveSlide(0);
	}, [width]);

	return (
		<>
			<div className="py-12 flex flex-col gap-16 bg-white overflow-hidden">
				<div className="container mx-auto p-0">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col sm:flex-row gap-4 items-center lg:items-end justify-between py-8 px-4"
					>
						<div>
							<motion.h4
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="font-aspektaMain uppercase text-center lg:text-left text-base text-accent-default"
							>
								{subtitle}
							</motion.h4>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="my-3 max-w-xl mx-auto lg:mx-0 text-black uppercase font-aspektaMain leading-relaxed text-center lg:text-left text-lg sm:text-3xl"
							>
								{title}
							</motion.h3>
						</div>
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							aria-label={`${buttonLink?.title}`}
							className={buttonLink?.url ? "group w-fit" : "hidden"}
						>
							<div className="bg-accent-default group-hover:bg-primary-three p-4 lg:px-6 transition-all duration-500 ease-in-out font-aspektaMain text-white font-extrabold uppercase text-left text-paragraph">
								{buttonLink?.title}
							</div>
						</Link>
					</motion.div>
					<LazyMotion features={domMax}>
						<div className="overflow-hidden px-4 lg:px-0">
							<div className="pl-3/20">
								<div className="relative">
									{/* Prev */}
									<motion.button
										initial={{opacity: 0}}
										animate={{opacity: 1}}
										exit={{opacity: 0}}
										className={
											activeImage
												? "hidden"
												: "absolute top-1/2 left-[2.5%] z-10 w-8 lg:w-12 bg-white hover:bg-accent-default rounded-full p-4 transform -translate-y-1/2 transition-opacity duration-200 ease-in-out"
										}
										onClick={() => arrowHandler("prev")}
									>
										<Image
											width={500}
											height={500}
											src="/svg/left-arrow-black.svg"
											alt="Black arrow in a gold circle"
										/>
									</motion.button>
									<motion.div
										initial={{translateX: "0px"}}
										animate={{translateX: `${largeTranslate}px`}}
										transition={{duration: 0.5, type: "spring"}}
										className="flex flex-row py-12 items-center"
									>
										{/* {globalContext?.developments?.length > 0 ? (
											globalContext?.developments?.map(
												(item: any, keys: number) => (
													<Fragment key={keys}>
														<motion.div
															custom={keys}
															initial={initial}
															whileInView="animate"
															viewport={{once: true}}
															variants={arrayLoopStaggerChildren}
															ref={largeSlideRef}
															className={`flex-shrink-0 w-4/5 sm:w-2/3 pr-3 sm:pr-4 transition-opacity duration-200 ease-in-out ${
																keys !== activeSlide
																	? "opacity-50"
																	: "opacity-100"
															}`}
														>
															<DevelopmentsSlideCard
																link={item?.node?.uri}
																title={item?.node?.title}
																backgroundImage={
																	item?.node?.featuredImage?.node?.sourceUrl
																}
															/>
														</motion.div>
													</Fragment>
												)
											)
										) : (
											<></>
										)} */}
										Last Slide
										<div
											ref={largeSlideRef}
											className="flex-shrink-0 w-4/5 sm:w-2/3 pr-3 sm:pr-4 transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-90"
										>
											<DevelopmentsSlideCard
												link={buttonLink?.url}
												title={buttonLink?.title}
												backgroundImage={lastSlideImage?.sourceUrl}
											/>
										</div>
									</motion.div>
									{/* Next */}
									<motion.button
										initial={{opacity: 0}}
										animate={{opacity: 1}}
										exit={{opacity: 0}}
										className={
											activeImage
												? "hidden"
												: "absolute z-10 w-8 bg-white hover:bg-accent-default rounded-full p-4 transform -translate-y-1/2 top-1/2 right-[2.5%] lg:right-[37%] lg:w-12 transition-opacity duration-200 ease-in-out"
										}
										onClick={() => arrowHandler("next")}
									>
										<Image
											width={500}
											height={500}
											src="/svg/right-arrow-black.svg"
											alt="Black arrow in a gold circle"
										/>
									</motion.button>
								</div>
							</div>
						</div>
					</LazyMotion>
				</div>
			</div>
		</>
	);
};

export default FeaturedProjects;
