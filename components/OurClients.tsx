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
			<div className="py-4 px-4 bg-white container mx-auto p-0">
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-col items-center"
				>
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="my-3 max-w-xl mx-auto lg:mx-0 text-black uppercase font-aspektaMain leading-relaxed text-center lg:text-left text-lg sm:text-xl lg:text-4xl"
					>
						{title}
					</motion.h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 justify-between -mb-2 -mx-2">
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
				</motion.div>
			</div>
		</>
	);
};

export default OurClients;
