// Imports
import fadeInUp, {
	initial,
	slideInRightFinish,
	slideInLeftInitial,
	slideInRightInitial,
} from "@/animations/animations";
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IAboutContentImage} from "@/types/components/index";

// Styling
import styles from "@/styles/components/AboutContentImage.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph";

const AboutContentImage: FC<IAboutContentImage> = ({
	title,
	cardOne,
	cardTwo,
	cardThree,
	paragraph,
	buttonLink,
}) => {
	return (
		<>
			<div
				className={
					styles.aboutContentImage + " aboutContentImage py-10 px-4 lg:py-16"
				}
			>
				<div className="lg:container mx-auto flex flex-col-reverse lg:flex-row gap-6 lg:gap-10">
					<motion.div
						viewport={{once: true}}
						initial={slideInLeftInitial}
						whileInView={slideInRightFinish}
						className="relative bg-grey hover:bg-primary-dark transition-all ease-in-out duration-500 flex flex-col items-center justify-between p-4 min-h-[600px] sm:min-h-[600px] md:min-h-[400px] lg:min-h-[320px] bg-blend-multiply bg-center bg-cover bg-no-repeat"
						style={{
							backgroundImage: `url(${cardOne?.backgroundImage?.sourceUrl})`,
						}}
					>
						<motion.h4
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="text-white font-aspektaMain uppercase font-semibold text-base text-center lg:text-left"
						>
							{cardOne?.subtitle}
						</motion.h4>
						<div>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-white font-extrabold leading-[1.75rem] sm:leading-snug text-2xl italic mb-4 text-center xl:text-left font-aspektaMain"
							>
								{cardOne?.title}
							</motion.h3>
							<div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-end md:gap-4 lg:space-x-0 xl:space-x-4 space-y-4 md:space-y-0 lg:space-y-4 xl:space-y-0">
								<Link
									href={`${cardOne?.buttonLink?.url}`}
									target={cardOne?.buttonLink?.target}
									aria-label={`${cardOne?.buttonLink?.title}`}
									className={
										cardOne?.buttonLink?.url
											? "w-fit mx-auto lg:mx-0 py-4 px-6 cursor-pointer bg-white hover:bg-pureBlack transition-all ease-in-out duration-500 font-semibold uppercase text-black text-base hover:text-white text-center font-aspektaMain"
											: "hidden"
									}
								>
									{cardOne?.buttonLink?.title}
								</Link>
								<Link
									href={`${cardOne?.buttonLinkTwo?.url}`}
									target={cardOne?.buttonLinkTwo?.target}
									aria-label={`${cardOne?.buttonLinkTwo?.title}`}
									className={
										cardOne?.buttonLinkTwo?.url
											? "w-fit mx-auto lg:mx-0 py-4 px-6 cursor-pointer bg-accent-default hover:bg-accent-two transition-all ease-in-out duration-500 font-semibold uppercase text-white text-base hover:text-white text-center font-aspektaMain"
											: "hidden"
									}
								>
									{cardOne?.buttonLinkTwo?.title}
								</Link>
							</div>
						</div>
					</motion.div>

					<div className="w-full lg:w-[85%] flex flex-col gap-8">
						<Title
							content={title}
							tailwindStyling="title leading-snug lg:leading-[2.5rem] uppercase font-aspektaMain text-black text-center lg:text-left font-semibold text-lg sm:text-xl lg:text-4xl"
						/>
						<Paragraph
							content={paragraph}
							tailwindStyling="text-lg text-black text-center lg:text-left leading-relaxed"
						/>
						<motion.div
							viewport={{once: true}}
							initial={slideInLeftInitial}
							whileInView={slideInRightFinish}
							className={buttonLink?.url ? "w-fit mx-auto lg:mx-0" : "hidden"}
						>
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								aria-label={`${buttonLink?.title}`}
								className="group mt-4 lg:mt-2"
							>
								<div className="bg-accent-default group-hover:bg-primary-default p-4 lg:px-6 flex justify-between gap-6 h-full transition-all duration-500 ease-in-out font-aspektaMain uppercase text-white font-extrabold uppercase text-left text-lg">
									{buttonLink?.title}
								</div>
							</Link>
						</motion.div>
						<motion.div
							viewport={{once: true}}
							initial={slideInRightInitial}
							whileInView={slideInRightFinish}
							className="grid grid-cols-1 xl:grid-cols-2 gap-8"
						>
							<Link
								className="group"
								href={`${cardTwo?.link?.url}`}
								target={cardTwo?.link?.target}
								aria-label={`${cardTwo?.link?.title}`}
							>
								<div className="min-h-[350px] md:min-h-[300px] lg:min-h-[400px] bg-lightGrey group-hover:bg-accent-default p-6 flex flex-col justify-between h-full transition-all duration-500 ease-in-out">
									<motion.h4
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="text-black group-hover:text-white font-aspektaMain uppercase font-semibold text-base text-center md:text-left"
									>
										{cardTwo?.subtitle}
									</motion.h4>
									<motion.h3
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="font-aspektaMain text-black group-hover:text-white font-extrabold text-xl xl:text-2xl italic"
									>
										{cardTwo?.title}
									</motion.h3>
									<svg
										className="group-hover:text-white group-hover:translate-x-2 group-hover:rotate-[-45deg] transition-all duration-500 ease-in-out self-end"
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
												stroke="#000"
												strokeWidth="3"
												className="group-hover:stroke-white transition-all duration-200 ease-in-out"
											/>
											<path
												id="Path_49"
												data-name="Path 49"
												d="M463.015,2090.015l11.306,11.082L463.3,2112.131"
												transform="translate(-1.047 -15.019)"
												fill="none"
												stroke="#000"
												strokeWidth="3"
												className="group-hover:stroke-white transition-all duration-200 ease-in-out"
											/>
										</g>
									</svg>
								</div>
							</Link>
							<Link
								className="group"
								href={`${cardThree?.link?.url}`}
								target={cardThree?.link?.target}
								aria-label={`${cardThree?.link?.title}`}
							>
								<div className="min-h-[350px] md:min-h-[300px] lg:min-h-[400px] bg-primary-two group-hover:bg-primary-three p-6 flex flex-col justify-between h-full transition-all duration-500 ease-in-out">
									<motion.h4
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="text-white group-hover:text-white font-aspektaMain uppercase font-semibold text-base text-center md:text-left"
									>
										{cardThree?.subtitle}
									</motion.h4>
									<motion.h3
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="font-aspektaMain text-white font-extrabold text-xl xl:text-2xl italic"
									>
										{cardThree?.title}
									</motion.h3>
									<svg
										className="group-hover:translate-x-2 group-hover:rotate-[-45deg] transition-all duration-500 ease-in-out self-end"
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
								</div>
							</Link>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutContentImage;
