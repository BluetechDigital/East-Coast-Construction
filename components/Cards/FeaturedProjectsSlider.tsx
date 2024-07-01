"use client";

// Import
import Image from "next/image";
import useWindowSize from "@/Hooks/useWindowSize";
import {useGlobalContext} from "@/context/global";
import {LazyMotion, domMax, motion} from "framer-motion";
import {FC, Fragment, useEffect, useRef, useState} from "react";
import {initial, arrayLoopStaggerChildren} from "@/animations/animations";
import {IDevelopmentsImage, IFeaturedProjectsSlider} from "@/types/components";

// Components
import DevelopmentsSlideCard from "./DevelopmentsSlideCard";

const FeaturedProjectsSlider: FC<IFeaturedProjectsSlider> = ({
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
		<LazyMotion features={domMax}>
			<div className="w-full  px-0 lg:px-0">
				<div className="w-full pl-3/20">
					<div className="w-full relative">
						{/* Prev */}
						<motion.button
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							onClick={() => arrowHandler("prev")}
							className={
								activeImage
									? "hidden"
									: "absolute top-1/2 left-[2.5%] z-10 p-3 lg:p-4 w-10 lg:w-12 bg-white hover:bg-accent-default rounded-full transform -translate-y-1/2 transition-opacity duration-200 ease-in-out"
							}
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
							className="w-full flex py-12 items-center"
						>
							{globalContext?.developments?.length > 0 ? (
								globalContext?.developments?.map((item: any, keys: number) => (
									<Fragment key={keys}>
										<motion.div
											custom={keys}
											initial={initial}
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
											ref={largeSlideRef}
											className={`flex-shrink-0 w-full md:w-4/5 lg:w-2/3 pr-3 sm:pr-4 transition-opacity duration-200 ease-in-out ${
												keys !== activeSlide ? "opacity-50" : "opacity-100"
											}`}
										>
											<DevelopmentsSlideCard
												title={item?.node?.title}
												link={`/developments/${item?.node?.slug}`}
												backgroundImage={item?.node?.featuredImage?.node}
											/>
										</motion.div>
									</Fragment>
								))
							) : (
								<></>
							)}
							{/* Last Slide */}
							<div
								ref={largeSlideRef}
								className="flex-shrink-0 w-4/5 sm:w-2/3 pr-3 sm:pr-4 transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-90"
							>
								<DevelopmentsSlideCard
									link={buttonLink?.url}
									title={buttonLink?.title}
									backgroundImage={lastSlideImage}
								/>
							</div>
						</motion.div>
						{/* Next */}
						<motion.button
							initial={{opacity: 0}}
							animate={{opacity: 1}}
							exit={{opacity: 0}}
							onClick={() => arrowHandler("next")}
							className={
								activeImage
									? "hidden"
									: "absolute z-10 p-3 lg:p-4 w-10 lg:w-12 bg-white hover:bg-accent-default rounded-full transform -translate-y-1/2 top-1/2 right-[7%] lg:right-[37%] transition-opacity duration-200 ease-in-out"
							}
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
	);
};

export default FeaturedProjectsSlider;
