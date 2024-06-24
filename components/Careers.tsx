// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {ICareers} from "@/types/components/index";
import {fadeInUp, initial, stagger} from "@/animations/animations";

// Components
import CareersGrid from "./Elements/CareersGrid";
import Paragraph from "@/components/Elements/Paragraph";

const Careers: FC<ICareers> = ({title, subtitle, paragraph}) => {
	return (
		<div
			className="py-12 px-4 bg-white bg-cover bg-no-repeat bg-center"
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
			<div className="lg:container relative m-auto flex flex-col items-center gap-6 sm:gap-12 lg:gap-20">
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

				<CareersGrid />
			</div>
		</div>
	);
};

export default Careers;
