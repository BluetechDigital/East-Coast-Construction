// Imports
import {
	initial,
	fadeInUp,
	arrayLoopStaggerChildren,
} from "../animations/animations";
import Image from "next/image";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ISkillsExperiences} from "@/types/components/index";

// Styling
import styles from "@/styles/components/SkillsExperiences.module.scss";

// Components
import Title from "@/components/Elements/Title";
import Paragraph from "@/components/Elements/Paragraph";

const SkillsExperiences: FC<ISkillsExperiences> = ({
	title,
	image,
	paragraph,
	displayImageFull,
	skillsExperiencesGrid,
}) => {
	return (
		<>
			<div
				className={
					styles.skillsExperiences +
					" skillsExperiences relative overflow-hidden py-8 px-4 bg-center bg-no-repeat bg-cover"
				}
				style={{
					backgroundImage: `linear-gradient(
								0deg,
								rgb(255, 255, 255, 0.70),
								rgba(255, 255, 255, 0.70),
								rgba(255, 255, 255, 0.70)
							),url("/img/background/Cement-Floor-Background.jpg")`,
				}}
			>
				<div className="lg:container px-0 mx-auto">
					<div className="flex flex-wrap border-b border-accent-default my-4">
						<div className="w-full lg:w-1/2 p-4">
							<Title
								content={title}
								tailwindStyling="title my-3 max-w-xl mx-auto lg:mx-0 text-black uppercase font-aspektaMain leading-relaxed text-center lg:text-left text-lg sm:text-xl lg:text-4xl"
							/>
							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-full lg:max-w-xl  leading-relaxed text-black text-lg text-center lg:text-left"
							/>
						</div>
						<div className="w-full lg:w-1/2 p-4 h-[500px]">
							<Image
								alt={image?.altText}
								src={image?.sourceUrl}
								width={
									image?.mediaDetails.width ? image?.mediaDetails.width : 1000
								}
								height={
									image?.mediaDetails.height ? image?.mediaDetails.height : 1000
								}
								className={`${
									image?.sourceUrl
										? `${
												displayImageFull
													? "w-full h-full object-cover"
													: "px-16 lg:px-28 mx-auto xl:mx-0 w-full h-[150px] lg:h-[200px] object-cover"
										  } object-center`
										: "hidden"
								}`}
								style={{
									clipPath: `inset(${
										displayImageFull ? "0 0 0 0 round 5% 20% 0 10%" : "0%"
									})`,
								}}
							/>
						</div>
					</div>
					<div className="p-4 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-y-6 gap-4 items-start justify-center">
						{skillsExperiencesGrid?.length > 0 ? (
							skillsExperiencesGrid?.map((item: any, keys: number) => (
								<Fragment key={keys}>
									<motion.div
										custom={keys}
										initial={initial}
										whileInView="animate"
										viewport={{once: true}}
										variants={arrayLoopStaggerChildren}
										className="flex flex-col items-center justify-center h-fit"
									>
										<Image
											className={
												item?.image?.sourceUrl
													? "bg-lightGreyTwo mx-auto w-full h-32 mb-6 object-cover object-center"
													: "hidden"
											}
											alt={item?.image?.altText}
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
										/>
										<Paragraph
											content={item?.text}
											tailwindStyling="text-black text-tiny text-center"
										/>
									</motion.div>
								</Fragment>
							))
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default SkillsExperiences;
