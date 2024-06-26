// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IOurServicesCard} from "@/types/components";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Components
import Paragraph from "../Elements/Paragraph";

const OurServicesCard: FC<IOurServicesCard> = ({
	link,
	title,
	paragraph,
	backgroundImage,
}) => {
	return (
		<>
			<Link href={`${link?.url}`} target={link?.target}>
				<motion.div
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className="group bg-center bg-no-repeat bg-cover transition-all duration-500 ease-in-out md:hover:scale-105"
					style={{
						backgroundImage: `linear-gradient(
										0deg,
										rgba(0, 0, 0, 0.15),
										rgba(0, 0, 0, 0.30),
										rgba(0, 0, 0, 0.45),
										rgba(0, 0, 0, 0.60),
										rgba(0, 0, 0, 0.60)
									),url("${backgroundImage?.sourceUrl}")`,
					}}
				>
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className={
							link?.url
								? "flex flex-col items-center justify-center min-h-[300px] lg:min-h-[365px] xl:min-h-[350px] 2xl:min-h-[325px] h-full max-h-[450px] hover:bg-pureBlack/60 transition-all duration-500 ease-in-out"
								: "hidden"
						}
					>
						<div className="h-full flex flex-col p-6 justify-center gap-4">
							<div>
								<motion.h3
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className="my-3 max-w-xl mx-auto lg:mx-0 text-center lg:text-left text-white uppercase font-aspektaMain text-lg transition-all duration-500 ease-in-out"
								>
									{title}
								</motion.h3>
								<Paragraph
									content={
										paragraph?.length > 200
											? paragraph?.substring(0, 200) + "..."
											: paragraph
									}
									tailwindStyling="text-center lg:text-left text-white text-base tracking-[0.05rem]"
								/>
							</div>
							<motion.button
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="font-aspektaMain uppercase text-center lg:text-left mx-auto lg:mx-0 text-white tracking-[0.05rem] text-tiny mt-1 border-b-2 w-fit transition-all duration-500 ease-in-out"
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
