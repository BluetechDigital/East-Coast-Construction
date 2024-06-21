"use client";

// Imports
import React, {FC, Fragment} from "react";
import {usePageContext} from "@/context/providers/PageContextProvider";

// Components
import Hero from "@/components/Hero";
import HeroTwo from "@/components/HeroTwo";
import VideoBlock from "@/components/VideoBlock";
import OurServices from "@/components/OurServices";
import GallerySlider from "@/components/GallerySlider";
import TitleParagraph from "@/components/TitleParagraph";
import Accreditations from "@/components/Accreditations";
import SkillsExperiences from "@/components/SkillsExperiences";
import AboutContentImage from "@/components/AboutContentImage";
import ContentSectorGrid from "@/components/ContentSectorGrid";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent: any = content?.postTypeFlexibleContent;

	// Components Key Value Pairs
	const componentMap: any = {
		[`${FlexibleContent}_Hero`]: Hero,
		[`${FlexibleContent}_HeroTwo`]: HeroTwo,
		[`${FlexibleContent}_VideoBlock`]: VideoBlock,
		[`${FlexibleContent}_OurServices`]: OurServices,
		[`${FlexibleContent}_GallerySlider`]: GallerySlider,
		[`${FlexibleContent}_Accreditations`]: Accreditations,
		[`${FlexibleContent}_TitleParagraph`]: TitleParagraph,
		[`${FlexibleContent}_AboutContentImage`]: AboutContentImage,
		[`${FlexibleContent}_ContentSectorGrid`]: ContentSectorGrid,
		[`${FlexibleContent}_SkillsExperiences`]: SkillsExperiences,
	};

	return (
		<>
			{content?.content?.length > 0 &&
				content?.content?.map((item: any, index: number) => (
					<section
						key={index}
						className={item?.displaySection ? "block" : "hidden"}
					>
						{componentMap[item?.fieldGroupName] && (
							<Fragment>
								{React.createElement(componentMap[item?.fieldGroupName], {
									...item,
								})}
							</Fragment>
						)}
					</section>
				))}
		</>
	);
};

export default RenderFlexibleContent;
