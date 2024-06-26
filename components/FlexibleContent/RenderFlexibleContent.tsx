"use client";

// Imports
import React, {FC, Fragment} from "react";
import {usePageContext} from "@/context/providers/PageContextProvider";

// Components
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import CTATwo from "@/components/CTATwo";
import Gallery from "@/components/Gallery";
import HeroTwo from "@/components/HeroTwo";
import Careers from "@/components/Careers";
import VideoBlock from "@/components/VideoBlock";
import OurClients from "@/components/OurClients";
import TeamMembers from "@/components/TeamMembers";
import ContactForm from "@/components/ContactForm";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
import ServicesGrid from "@/components/ServicesGrid";
import GallerySlider from "@/components/GallerySlider";
import TitleParagraph from "@/components/TitleParagraph";
import Accreditations from "@/components/Accreditations";
import FeaturedProjects from "@/components/FeaturedProjects";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import TitleContentImage from "@/components/TitleContentImage";
import AboutContentImage from "@/components/AboutContentImage";
import ContentSectorGrid from "@/components/ContentSectorGrid";
import SkillsExperiences from "@/components/SkillsExperiences";
import OurServicesGridTwo from "@/components/OurServicesGridTwo";
import RequestAppointmentForm from "@/components/RequestAppointmentForm";
import ExecutiveLeadershipsTeam from "@/components/ExecutiveLeadershipsTeam";
import DevelopmentsGrid from "../DevelopmentsGrid";

const RenderFlexibleContent: FC = () => {
	const content = usePageContext();
	const FlexibleContent: any = content?.postTypeFlexibleContent;

	// Components Key Value Pairs
	const componentMap: any = {
		[`${FlexibleContent}_Cta`]: CTA,
		[`${FlexibleContent}_Hero`]: Hero,
		[`${FlexibleContent}_CtaTwo`]: CTATwo,
		[`${FlexibleContent}_Careers`]: Careers,
		[`${FlexibleContent}_HeroTwo`]: HeroTwo,
		[`${FlexibleContent}_Gallery`]: Gallery,
		[`${FlexibleContent}_VideoBlock`]: VideoBlock,
		[`${FlexibleContent}_OurClients`]: OurClients,
		[`${FlexibleContent}_TeamMembers`]: TeamMembers,
		[`${FlexibleContent}_ContactForm`]: ContactForm,
		[`${FlexibleContent}_OurServices`]: OurServices,
		[`${FlexibleContent}_Testimonials`]: Testimonials,
		[`${FlexibleContent}_ServicesGrid`]: ServicesGrid,
		[`${FlexibleContent}_GallerySlider`]: GallerySlider,
		[`${FlexibleContent}_Accreditations`]: Accreditations,
		[`${FlexibleContent}_TitleParagraph`]: TitleParagraph,
		[`${FlexibleContent}_DevelopmentsGrid`]: DevelopmentsGrid,
		[`${FlexibleContent}_FeaturedProjects`]: FeaturedProjects,
		[`${FlexibleContent}_TestimonialsGrid`]: TestimonialsGrid,
		[`${FlexibleContent}_TitleContentImage`]: TitleContentImage,
		[`${FlexibleContent}_AboutContentImage`]: AboutContentImage,
		[`${FlexibleContent}_ContentSectorGrid`]: ContentSectorGrid,
		[`${FlexibleContent}_SkillsExperiences`]: SkillsExperiences,
		[`${FlexibleContent}_OurServicesGridTwo`]: OurServicesGridTwo,
		[`${FlexibleContent}_RequestAppointmentForm`]: RequestAppointmentForm,
		[`${FlexibleContent}_ExecutiveLeadershipsTeam`]: ExecutiveLeadershipsTeam,
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
