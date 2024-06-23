// Import
import Link from "next/link";
import {motion} from "framer-motion";
import {FC} from "react";
import {IFeaturedProjects} from "@/types/components";
import {stagger, initial, fadeInUp} from "@/animations/animations";

// Components
import FeaturedProjectsSlider from "@/components/Cards/FeaturedProjectsSlider";

const FeaturedProjects: FC<IFeaturedProjects> = ({
	title,
	subtitle,
	buttonLink,
	lastSlideImage,
}) => {
	return (
		<>
			<div
				className="py-16 px-4 flex flex-col gap-16 bg-white overflow-hidden bg-cover bg-no-repeat bg-center"
				style={{
					backgroundImage: `linear-gradient(
									0deg,
									rgba(255, 255, 255, 1),
									rgba(255, 255, 255, 0.95),
									rgba(255, 255, 255, 0.85),
									rgba(255, 255, 255, 0.80)
								),url("/svg/background/grid-background-12.svg")`,
				}}
			>
				<div className="container mx-auto p-0">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col lg:flex-row gap-4 items-center lg:items-end justify-between py-8 px-4"
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
								className="my-3 max-w-xl mx-auto lg:mx-0 text-black uppercase font-aspektaMain leading-relaxed text-center lg:text-left text-lg sm:text-xl lg:text-4xl"
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
					<FeaturedProjectsSlider
						buttonLink={buttonLink}
						lastSlideImage={lastSlideImage}
					/>
				</div>
			</div>
		</>
	);
};

export default FeaturedProjects;
