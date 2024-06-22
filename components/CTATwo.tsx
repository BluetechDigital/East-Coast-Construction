// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {ICTATwo} from "@/types/components/index";
import {initial, stagger} from "@/animations/animations";

// Styling
import styles from "@/styles/components/CTA.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";

const CTATwo: FC<ICTATwo> = ({paragraph, buttonLink}) => {
	return (
		<>
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className={styles.ctaTwo + " flex flex-wrap justify-between"}
			>
				<div
					className={
						styles.paragraphClipPath +
						" bg-accent-default py-2 px-16 w-full lg:w-2/5"
					}
				>
					<Paragraph
						content={paragraph}
						tailwindStyling="font-aspektaMain italic leading-tight text-white leading-[1.75rem] text-center lg:text-left text-lg sm:text-xl"
					/>
				</div>
				<Link
					href={`${buttonLink?.url}`}
					target={buttonLink?.target}
					className={`${buttonLink?.url ? "block w-full lg:w-fit" : "hidden"}`}
				>
					<div
						className={
							styles.ctaTwoButtonLink +
							" flex items-center justify-center h-full w-full lg:w-auto mx-auto lg:mx-0 py-4 lg:py-8 px-4 lg:pl-12 lg:pr-16 text-center lg:text-left cursor-pointer bg-primary-three hover:bg-primary-two transition-all ease-in-out duration-500"
						}
					>
						<span className="tracking-[0.10rem] text-lightGrey text-tiny uppercase font-aspektaMain">
							{buttonLink?.title}
						</span>
					</div>
				</Link>
			</motion.div>
		</>
	);
};

export default CTATwo;
