// Imports
import {FC} from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {IDevelopmentsSlideCard} from "@/types/components";
import {fadeIn, initialTwo} from "@/animations/animations";

const DevelopmentsSlideCard: FC<IDevelopmentsSlideCard> = ({
	title,
	link,
	backgroundImage,
}) => {
	return (
		<>
			<Link href={link} target={``}>
				<div
					className="flex items-end bg-cover bg-no-repeat bg-center w-full h-[350px] md:h-[400px] lg:h-[550px] py-8 px-16"
					style={{
						backgroundImage: `linear-gradient(
							0deg,
							rgba(0, 0, 0, 0.95),
							rgba(0, 0, 0, 0.80),
							rgba(0, 0, 0, 0.55),
							rgba(0, 0, 0, 0.30)
						),url("${backgroundImage}")`,
					}}
				>
					<motion.h2
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className="font-aspektaMain font-semibold hover:text-accent-default transition-all duration-200 ease-in-out uppercase tracking-[0.075rem] text-left text-lg mb-4 text-white border-b-2 border-accent-default"
					>
						{title}
					</motion.h2>
				</div>
			</Link>
		</>
	);
};

export default DevelopmentsSlideCard;
