// Imports
import fadeInUp, {
	initial,
	stagger,
	arrayLoopStaggerChildren,
} from "@/animations/animations";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IOurClients} from "@/types/components";

const OurClients: FC<IOurClients> = ({title, clientsGrid}) => {
	return (
		<>
			<div className="py-12 px=4">
				<div className="container mx-auto px-4">
					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-wrap items-center -mx-4"
					>
						<div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="my-3 max-w-xl mx-auto lg:mx-0 text-black uppercase font-aspektaMain leading-relaxed text-center lg:text-left text-lg sm:text-3xl"
							>
								{title}
							</motion.h3>
						</div>
						<div className="w-full lg:w-1/2 px-4">
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-between -mb-2 -mx-2">
								{clientsGrid?.length > 0 ? (
									clientsGrid?.map((item: any, keys: number) => (
										<Fragment key={keys}>
											<motion.div
												custom={keys}
												initial={initial}
												whileInView="animate"
												viewport={{once: true}}
												variants={arrayLoopStaggerChildren}
											>
												<Image
													alt={item?.image?.altText}
													src={item?.image?.sourceUrl}
													width={
														item?.image?.mediaDetails.width
															? item?.image?.mediaDetails.width
															: 1000
													}
													height={
														item?.image?.mediaDetails.height
															? item?.image?.mediaDetails.height
															: 1000
													}
													className={`${
														item?.image?.sourceUrl
															? "w-full h-full object-contain object-center"
															: "hidden"
													}`}
												/>
											</motion.div>
										</Fragment>
									))
								) : (
									<></>
								)}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default OurClients;
