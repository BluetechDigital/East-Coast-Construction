// Imports
import {
	initial,
	stagger,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IOurServices} from "@/types/components/index";

// Styling
import styles from "@/styles/components/OurServices.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import OurServicesCard from "./Cards/OurServicesCard";

const OurServices: FC<IOurServices> = ({
	title,
	subtitle,
	paragraph,
	buttonLink,
	servicesGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.ourServices + " py-12 px-4 bg-center bg-no-repeat bg-cover"
				}
				style={{
					backgroundImage: `linear-gradient(
						0deg,
						rgb(1, 1, 1, 0.25),
						rgba(1, 1, 1, 0.25),
						rgba(1, 1, 1, 0.25)
					),url("/img/background/Cement-Floor-Background.jpg")`,
				}}
			>
				<div className="container m-auto flex flex-col items-center gap-12 lg:gap-8">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full"
					>
						<div className="w-full lg:w-[25%]">
							<motion.h4
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="font-aspektaMain uppercase text-center lg:text-left text-base text-white"
							>
								{subtitle}
							</motion.h4>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="my-3 max-w-xl mx-auto lg:mx-0 text-white uppercase font-aspektaMain leading-relaxed text-center lg:text-left text-lg sm:text-xl lg:text-4xl"
							>
								{title}
							</motion.h3>
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-full lg:max-w-lg text-white text-lg text-center lg:text-left leading-relaxed"
							/>
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								className={`${buttonLink?.url ? "block mt-4" : "hidden"}`}
							>
								<div className="w-fit mx-auto lg:mx-0 py-4 px-6 text-center cursor-pointer tracking-[0.10rem] text-white text-tiny md:text-base uppercase font-aspektaMain bg-accent-default hover:bg-accent-two transition-all ease-in-out duration-500">
									{buttonLink?.title}
								</div>
							</Link>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 w-full lg:w-[66%]">
							{servicesGrid?.length > 0 ? (
								servicesGrid?.slice(0, 2)?.map((item: any, keys: number) => (
									<Fragment key={keys}>
										<motion.div
											custom={keys}
											initial={initial}
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
										>
											<OurServicesCard
												link={item?.link}
												title={item?.title}
												paragraph={item?.paragraph}
												backgroundImage={item?.backgroundImage}
											/>
										</motion.div>
									</Fragment>
								))
							) : (
								<></>
							)}
						</div>
					</motion.div>
					<div className="grid grid-cols-1 lg:grid-cols-3 p-0 gap-12 lg:gap-6 w-full">
						{servicesGrid?.length > 0 ? (
							servicesGrid?.slice(2)?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<motion.div
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<OurServicesCard
											link={item?.link}
											title={item?.title}
											paragraph={item?.paragraph}
											backgroundImage={item?.backgroundImage}
										/>
									</motion.div>
								</Fragment>
							))
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default OurServices;
