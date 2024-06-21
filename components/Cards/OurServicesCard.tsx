// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IOurServicesCard} from "@/types/components";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Styling
import styles from "../../styles/components/OurServices.module.scss";

// Components
import Paragraph from "../Elements/Paragraph";

const OurServicesCard: FC<IOurServicesCard> = ({
	link,
	icon,
	title,
	paragraph,
}) => {
	return (
		<>
			<Link href={`${link?.url}`} target={link?.target}>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="group"
				>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={
							link?.url
								? "flex flex-col items-center justify-center min-h-[300px] lg:min-h-[365px] xl:min-h-[350px] 2xl:min-h-[325px] h-full max-h-[450px] border-solid border-2 border-white hover:border-primary-default hover:bg-primary-default transition-all duration-500 ease-in-out"
								: "hidden"
						}
					>
						<div className="h-full flex flex-col p-6 justify-center gap-4">
							<Image
								alt={icon?.altText}
								src={icon?.sourceUrl}
								width={
									icon?.mediaDetails?.width ? icon?.mediaDetails?.width : 1000
								}
								height={
									icon?.mediaDetails?.height ? icon?.mediaDetails?.height : 1000
								}
								className={
									icon?.sourceUrl
										? "w-[50px] h-[50px] mx-auto lg:mx-0 object-contain object-center"
										: "hidden"
								}
							/>
							<div>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="text-center lg:text-left text-white uppercase font-aspektaMain text-paragraph my-3 transition-all duration-500 ease-in-out"
								>
									{title}
								</motion.h3>
								<Paragraph
									content={
										paragraph?.length > 200
											? paragraph?.substring(0, 200) + "..."
											: paragraph
									}
									tailwindStyling="text-center lg:text-left text-white text-base sm:text-base tracking-[0.05rem]"
								/>
							</div>
							<motion.button
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-center lg:text-left mx-auto lg:mx-0 text-accent-default group-hover:text-white tracking-[0.05rem] text-tiny mt-1 border-b-2 w-fit transition-all duration-500 ease-in-out"
							>
								{link?.title}
							</motion.button>
						</div>
					</motion.div>
				</motion.div>
			</Link>
		</>
	);
};

export default OurServicesCard;
