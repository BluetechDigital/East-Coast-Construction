// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "../../animations/animations";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import dateFormat from "dateformat";
import {IDevelopmentsCard} from "@/types/components/index";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const DevelopmentsCard: FC<IDevelopmentsCard> = ({
	slug,
	date,
	title,
	excerpt,
	featuredImage,
}) => {
	return (
		<>
			<Link target="" href={slug ? `developments/${slug}` : `/`}>
				<div className="overflow-hidden">
					<div
						className="flex flex-col justify-between items-center bg-black bg-center bg-no-repeat bg-cover transition-all duration-500 ease-in-out md:hover:scale-105"
						style={{
							backgroundImage: `linear-gradient(
							0deg,
							rgba(0, 0, 0, 0.15),
							rgba(0, 0, 0, 0.35),
							rgba(0, 0, 0, 0.45),
							rgba(0, 0, 0, 0.60)
						),url("${featuredImage?.node?.sourceUrl}")`,
						}}
					>
						<div className="h-full min-h-[450px] flex flex-col items-center lg:items-baseline justify-between gap-4 sm:gap-8 py-10 px-6 sm:px-10 sm:pt-20 hover:bg-pureBlack/45 transition-all duration-500 ease-in-out">
							<div>
								<div>
									<motion.h3
										initial={initialTwo}
										whileInView={fadeIn}
										viewport={{once: true}}
										className="mb-2 text-white text-lg leading-tight text-center lg:text-left uppercase font-aspektaMain"
									>
										{title}
									</motion.h3>
									<span className="font-aspektaRegular text-white text-base text-center lg:text-left">
										{dateFormat(date, "dddd, mmmm d, yyyy")}
									</span>
								</div>
								<Paragraph
									content={
										excerpt?.length > 200
											? excerpt?.substring(0, 150) + "..."
											: excerpt
									}
									tailwindStyling="mt-4 text-white text-base text-center lg:text-left"
								/>
							</div>
							<button className="w-fit mx-auto lg:mx-0 py-4 px-6 text-center tracking-[0.10rem] text-white text-sm uppercase font-aspektaMain text-center cursor-pointer bg-accent-default hover:bg-accent-two transition-all ease-in-out duration-500">
								View Project
							</button>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default DevelopmentsCard;
