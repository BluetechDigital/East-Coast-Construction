// Imports
import fadeInUp, {
	stagger,
	initial,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IServicesGrid} from "@/types/components/index";

// Styling
import styles from "../styles/components/OurServices.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import ServicesGridCard from "./Cards/ServicesGridCard";

const ServicesGrid: FC<IServicesGrid> = ({
	title,
	subtitle,
	paragraph,
	servicesGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.ServicesGrid +
					" py-8 px-4 bg-white bg-cover bg-no-repeat bg-center"
				}
				style={{
					backgroundImage: `linear-gradient(
										0deg,
										rgba(255, 255, 255, 1),
										rgba(255, 255, 255, 0.95),
										rgba(255, 255, 255, 0.85),
										rgba(255, 255, 255, 0.80)
									),url("/svg/background/grid-background-06.svg")`,
				}}
			>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="container mx-auto flex flex-col items-center gap-6 sm:gap-12 lg:gap-20"
				>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full"
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
								className="my-3 max-w-2xl mx-auto lg:mx-0 text-black uppercase font-aspektaMain leading-relaxed text-center lg:text-left text-lg sm:text-xl lg:text-4xl"
							>
								{title}
							</motion.h3>
						</div>
						<Paragraph
							content={paragraph}
							tailwindStyling="max-w-full lg:max-w-xl text-black text-lg text-center lg:text-left"
						/>
					</motion.div>
					<div className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 px-0 gap-6 items-start justify-center">
						{servicesGrid?.length > 0 ? (
							servicesGrid.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<>
										<motion.div
											custom={keys}
											initial={initial}
											whileInView="animate"
											viewport={{once: true}}
											variants={arrayLoopStaggerChildren}
											className={styles.card + " group overflow-hidden"}
										>
											<ServicesGridCard
												link={item?.link}
												image={item?.image}
												title={item?.title}
												paragraph={item?.paragraph}
											/>
										</motion.div>
									</>
								</Fragment>
							))
						) : (
							<></>
						)}
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default ServicesGrid;
