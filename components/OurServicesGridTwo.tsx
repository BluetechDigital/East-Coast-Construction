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
import {IOurServicesGridTwo} from "@/types/components/index";

// Styling
import styles from "../styles/components/OurServices.module.scss";

// Components
import OurServicesCardTwo from "./Cards/OurServicesCardTwo";

const OurServicesGridTwo: FC<IOurServicesGridTwo> = ({
	title,
	buttonLink,
	servicesGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.ourServices +
					" relative py-8 px-4 bg-white bg-cover bg-center bg-no-repeat"
				}
				style={{
					backgroundImage: `linear-gradient(
						0deg,
						rgba(255, 255, 255, 1),
						rgba(255, 255, 255, 0.85),
						rgba(255, 255, 255, 0.95),
						rgba(255, 255, 255, 0.80)
					),url("/svg/background/grid-background-06.svg")`,
				}}
			>
				<div className="lg:container relative m-auto flex flex-col gap-6">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col lg:flex-row items-center justify-between"
					>
						<motion.h3
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="my-3 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left text-black uppercase font-aspektaMain text-lg sm:text-xl lg:text-4xl my-3 transition-all duration-500 ease-in-out"
						>
							{title}
						</motion.h3>
						<Link
							href={`${buttonLink?.url}`}
							target={buttonLink?.target}
							className={`${buttonLink?.url ? "block mt-4" : "hidden"}`}
						>
							<div
								className={`w-fit mx-auto lg:mx-0 py-4 px-6 text-center cursor-pointer bg-primary-three hover:bg-primary-dark transition-all ease-in-out duration-500`}
							>
								<span className="tracking-[0.10rem] text-white text-tiny md:text-base uppercase font-aspektaMain text-center">
									{buttonLink?.title}
								</span>
							</div>
						</Link>
					</motion.div>
					<div className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 px-0 sm:px-4 gap-6 items-start justify-center">
						{servicesGrid?.length > 0 ? (
							servicesGrid?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<motion.div
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<OurServicesCardTwo
											image={item?.image}
											title={item?.title}
											paragraph={item?.paragraph}
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

export default OurServicesGridTwo;
