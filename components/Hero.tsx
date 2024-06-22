// Imports
import {
	fadeIn,
	initial,
	stagger,
	initialTwo,
	slideInRightFinish,
	slideInRightInitial,
} from "../animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IHero} from "@/types/components/index";

// Styling
import styles from "../styles/components/Hero.module.scss";

// Components
import RenderStars from "./Elements/RenderStars";

const Hero: FC<IHero> = ({
	title,
	buttonLink,
	ctaParagraph,
	buttonLinkTwo,
	backgroundImage,
}) => {
	return (
		<>
			<div className={styles.hero + " hero relative z-50 flex flex-col h-fit"}>
				<div className="lg:relative pt-[65px] md:pt-[112px] lg:pt-[112px] flex flex-col lg:flex-row">
					<div
						className="w-full h-screen sm:h-[75vh] flex flex-col items-center lg:items-baseline justify-center relative bg-center bg-no-repeat bg-cover"
						style={{
							backgroundImage: `linear-gradient(
								180deg,
								rgb(0, 0, 0, 0.35),
								rgba(0, 0, 0, 0.25),
								rgba(0, 0, 0, 0),
								rgba(0, 0, 0, 0),
								rgba(0, 0, 0, 0)
							),url("${backgroundImage?.sourceUrl}")`,
						}}
					>
						<div className="relative z-10 flex flex-col items-center lg:items-start gap-4 px-4 sm:px-8 lg:px-24">
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="max-w-full lg:max-w-xl mx-auto lg:mx-0"
							>
								<motion.h1
									initial={initialTwo}
									whileInView={fadeIn}
									viewport={{once: true}}
									className="text-center lg:text-left uppercase text-xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl text-white font-semibold leading-tight xl:leading-[2.5rem]"
								>
									{title}
								</motion.h1>
							</motion.div>
							<motion.div
								initial={initialTwo}
								whileInView={fadeIn}
								viewport={{once: true}}
								className="flex flex-col md:flex-row gap-2 sm:gap-4 max-w-sm lg:max-w-4xl mx-auto lg:mx-0"
							>
								<Link
									href={`${buttonLink?.url}`}
									target={buttonLink?.target}
									aria-label={`${buttonLink?.title}`}
									className={buttonLink?.url ? "group w-fit" : "hidden"}
								>
									<div className="bg-accent-default group-hover:bg-primary-three p-4 lg:px-6 transition-all duration-500 ease-in-out font-aspektaMain text-white font-extrabold uppercase text-left text-lg">
										{buttonLink?.title}
									</div>
								</Link>
							</motion.div>
						</div>
						<motion.div
							viewport={{once: true}}
							initial={slideInRightInitial}
							whileInView={slideInRightFinish}
							className="ctaBanner w-full lg:w-fit lg:max-w-sm xl:max-w-sm absolute right-0 bottom-0 flex flex-col gap-4"
						>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="w-full py-3 px-4 bg-lightGreyTwo/30 grid sm:grid-cols-2 items-center justify-center lg:justify-start gap-6"
							>
								<div className="flex items-center justify-center lg:justify-start gap-3">
									<Image
										width={1000}
										height={1000}
										alt={`Facebook reviews logo`}
										src="/img/facebook-logo-blue-circle-large-white.webp"
										className="my-auto lg:mx-0 w-10 h-10 object-cover object-center"
									/>
									<div className="flex flex-col gap-[7.5px]">
										<div className="flex items-center justify-start gap-[1px]">
											<RenderStars rating={5} color="White" />
										</div>
										<h3 className="font-medium uppercase text-tiny font-aspektaMain text-white">
											4.8 Rating
										</h3>
									</div>
								</div>
								<div className="flex items-center justify-center lg:justify-start gap-3">
									<Image
										width={1000}
										height={1000}
										alt={`Google reviews logo`}
										src="/svg/google-tile-logo.svg"
										className="bg-white rounded-full my-auto lg:mx-0 p-1 w-10 h-10 object-cover object-center"
									/>
									<div className="flex flex-col gap-[7.5px]">
										<div className="flex items-center justify-start gap-[1px]">
											<RenderStars rating={5} color="White" />
										</div>
										<h3 className="font-medium uppercase text-tiny font-aspektaMain text-white">
											4.0 Rating
										</h3>
									</div>
								</div>
							</motion.div>
							<div className="py-3 px-4 lg:p-6 bg-primary-three text-left xl:text-center">
								<Link
									href={`${buttonLinkTwo?.url}`}
									target={buttonLinkTwo?.target}
									aria-label={`${ctaParagraph} Form button link`}
									className="flex items-center justify-between gap-4 font-normal font-aspektaMain uppercase leading-tight text-white text-tiny md:text-base lg:text-medium"
								>
									<span>{ctaParagraph}</span>
									<span className="group xl:hidden flex items-center justify-end px-2 h-12 w-fit lg:h-16 rounded-full bg-accent-two hover:bg-primary-darker transition-all duration-200 ease-in-out">
										<svg
											className="w-8 h-8 p-1 rotate-[-45deg] group-hover:rotate-[0deg] transition-all duration-200 ease-in-out"
											xmlns="http://www.w3.org/2000/svg"
											width="31.905"
											height="24.247"
											viewBox="0 0 31.905 24.247"
										>
											<g
												id="Group_14"
												data-name="Group 14"
												transform="translate(-443.5 -2073.925)"
											>
												<line
													id="Line_2"
													data-name="Line 2"
													x2="30.063"
													transform="translate(443.5 2086.054)"
													fill="none"
													stroke="#ffffff"
													strokeWidth="3"
												/>
												<path
													id="Path_49"
													data-name="Path 49"
													d="M463.015,2090.015l11.306,11.082L463.3,2112.131"
													transform="translate(-1.047 -15.019)"
													fill="none"
													stroke="#ffffff"
													strokeWidth="3"
												/>
											</g>
										</svg>
									</span>
								</Link>
								<Link
									href={`${buttonLinkTwo?.url}`}
									target={buttonLinkTwo?.target}
									aria-label={`${buttonLinkTwo?.title}`}
									className={`hidden xl:flex w-fit mx-auto mt-2 py-4 px-6 cursor-pointer bg-accent-default hover:bg-primary-two transition-all ease-in-out duration-500 font-semibold uppercase text-white text-base text-center font-aspektaMain`}
								>
									{buttonLinkTwo?.title}
								</Link>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
