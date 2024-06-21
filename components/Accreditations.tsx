// Imports
import {
	initial,
	slideInRightFinish,
	slideInLeftInitial,
	slideInRightInitial,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IAccreditations} from "@/types/components/index";

// Styling
import styles from "@/styles/components/Accreditations.module.scss";

// Components
import Title from "./Elements/Title";

const Accreditations: FC<IAccreditations> = ({
	paragraph,
	accreditationsGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.accreditations +
					" accreditations bg-center bg-no-repeat bg-cover"
				}
			>
				<div className="flex flex-col lg:flex-row items-center justify-between px-4 py-10 lg:py-5 lg:px-0 lg:container mx-auto gap-10 lg:gap-20">
					<motion.div
						viewport={{once: true}}
						initial={slideInLeftInitial}
						whileInView={slideInRightFinish}
						className="w-full lg:w-[40%]"
					>
						<Title
							content={paragraph}
							tailwindStyling="title mb-3 lg:mb-0 text-black font-semibold font-aspektaMain leading-tight italic text-center lg:text-left text-lg sm:text-xl lg:text-xl"
						/>
					</motion.div>
					<motion.div
						viewport={{once: true}}
						initial={slideInRightInitial}
						whileInView={slideInRightFinish}
						className="w-full lg:w-[60%] grid grid-cols-1 xs:grid-cols-2 gap-10 xl:grid-cols-4 lg:gap-4 py-0 lg:py-6 items-center justify-center"
					>
						{accreditationsGrid?.length > 0 ? (
							accreditationsGrid?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<motion.div
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
									>
										<Image
											priority
											alt={`${item?.image?.altText}`}
											src={item?.image?.sourceUrl}
											width={
												item?.image?.mediaDetails?.width
													? item?.image?.mediaDetails?.width
													: 1000
											}
											height={
												item?.image?.mediaDetails?.height
													? item?.image?.mediaDetails?.height
													: 1000
											}
											className={
												item?.image?.sourceUrl
													? `block object-contain object-center w-full h-full max-h-[100px]`
													: `hidden`
											}
										/>
									</motion.div>
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

export default Accreditations;
