"use client";

// Imports
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {ITestimonials} from "@/types/components/index";
import {fadeInUp, initial, stagger} from "../animations/animations";

// Styling
import styles from "@/styles/components/Testimonials.module.scss";

// Components
import TestimonialsCard from "./Cards/TestimonialsCard";

const Testimonials: FC<ITestimonials> = ({title, subtitle}) => {
	const globalContext = useGlobalContext();
	return (
		<>
			<div
				className={
					styles.testimonials +
					` py-16 px-4 bg-white bg-cover bg-no-repeat bg-center`
				}
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
				<div className="lg:container m-auto px-0">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={title && subtitle ? "block py-4" : "hidden"}
					>
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
					</motion.div>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-4"
					>
						{globalContext?.testimonials?.length > 0 ? (
							globalContext?.testimonials
								?.slice(0, 3)
								?.map((item: any, keys: number) => (
									<Fragment key={keys}>
										<TestimonialsCard
											name={item?.node?.testimonialReview?.name}
											image={item?.node?.testimonialReview?.image}
											rating={item?.node?.testimonialReview?.rating}
											position={item?.node?.testimonialReview?.position}
											paragraph={item?.node?.testimonialReview?.paragraph}
										/>
									</Fragment>
								))
						) : (
							<></>
						)}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Testimonials;
