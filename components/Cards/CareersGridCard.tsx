// Imports
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ICareersGridCard} from "@/types/components";
import {fadeInUp, initial, stagger} from "@/animations/animations";

// Components
import Paragraph from "@/components/Elements/Paragraph";
import Link from "next/link";

const CareersGridCard: FC<ICareersGridCard> = ({
	slug,
	title,
	featuredImage,
	excerpt,
}) => {
	return (
		<div className="flex flex-col items-center justify-center p-6 h-full min-h-[250px] bg-white border-2 border-pureBlack border-solid">
			<motion.div
				initial={initial}
				variants={stagger}
				whileInView="animate"
				viewport={{once: true}}
				className="flex flex-col justify-between h-full"
			>
				<div>
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="my-3 max-w-xl mx-auto lg:mx-0 text-black uppercase font-aspektaMain leading-relaxed text-center lg:text-left text-lg sm:text-xl"
					>
						{title}
					</motion.h3>
					<Paragraph
						content={
							excerpt?.length > 275
								? excerpt?.substring(0, 275) + "..."
								: excerpt
						}
						tailwindStyling="max-w-full max-w-sm mx-auto lg:mx-0 text-paragraph text-black text-center lg:text-left"
					/>
				</div>
				<div className="">
					<Link
						target="_self"
						href={`${slug}`}
						className={`${slug ? "block mt-4" : "hidden"}`}
					>
						<div className="w-full mx-auto lg:mx-0 py-4 px-6 text-center cursor-pointer tracking-[0.10rem] text-white text-tiny md:text-base uppercase font-aspektaMain bg-accent-default hover:bg-accent-two transition-all ease-in-out duration-500">
							View Job
						</div>
					</Link>
				</div>
			</motion.div>
		</div>
	);
};

export default CareersGridCard;
