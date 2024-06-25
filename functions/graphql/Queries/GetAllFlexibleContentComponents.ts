// Imports
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PAGES & BLOGS POSTS*/
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export const getAllFlexibleContentComponents = async (
	slug: string,
	postType: string,
	postTypeFlexibleContent: string
) => {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: ${postType}(where: {name: "${slug}", status: PUBLISH}) {
					edges {
						node {
							template {
								... on DefaultTemplate {
									flexibleContent {
										flexibleContent {
											... on ${postTypeFlexibleContent}_Hero {
												fieldGroupName
												displaySection
												title
												ctaParagraph
												buttonLink {
													url
													title
													target
												}
												buttonLinkTwo {
													url
													title
													target
												}
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_HeroTwo {
												fieldGroupName
												displaySection
												title
												paragraph
												backgroundImage {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
											}
											... on ${postTypeFlexibleContent}_TitleParagraph {
												fieldGroupName
												displaySection
												title
												paragraph
												displayParagraph
											}
											... on ${postTypeFlexibleContent}_AboutContentImage {
                								fieldGroupName
                								displaySection
                								title
                								paragraph
                								buttonLink {
                									url
                									title
                									target
                								}
                								cardOne {
                									title
                									subtitle
                									buttonLink {
                										url
                										title
                										target
                									}
                									buttonLinkTwo {
                										url
                										title
                										target
                									}
                									backgroundImage {
                										altText
                										sourceUrl
                										mediaDetails {
                											height
                											width
                										}
                									}
                								}
                								cardTwo {
                									title
                									subtitle
                									link {
                									 	url
                									 	title
                									 	target
                									}
                								}
                								cardThree {
                									title
                									subtitle
                									link {
                										url
                										title
                										target
                									}
                								}
											}
											... on ${postTypeFlexibleContent}_Accreditations {
            									fieldGroupName
												displaySection
												paragraph
              									accreditationsGrid {
              									  	image {
              									  	  	altText
              									  	  	sourceUrl
              									  	  	mediaDetails {
              									  	  	  	height
              									  	  	  	width
              									  	  	}
              									  	}
              									}
            								}
											... on ${postTypeFlexibleContent}_ContentSectorGrid {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												sectorGrid {
													title
													link {
														url
														title
														target
													}
													image {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
												}
											}
											... on ${postTypeFlexibleContent}_OurServices {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												buttonLink {
            										url
            										title
            										target
            									}
												servicesGrid {
													title
													paragraph
													link {
														url
														title
														target
													}
													backgroundImage {
            											altText
            											sourceUrl
            											mediaDetails {
            												height
            												width
            											}
            										}
												}
											}
											... on ${postTypeFlexibleContent}_OurServicesGridTwo {
            									fieldGroupName
												displaySection
            									title
            									buttonLink {
            										url
            										title
            										target
            									}
            									servicesGrid {
            									  	title
            									  	paragraph
            									  	image {
            									  		altText
            									  		sourceUrl
            									  		mediaDetails {
            									  			height
            									  			width
            									  		}
            									  	}
            									}
            								}
											... on ${postTypeFlexibleContent}_Gallery {
												fieldGroupName
												displaySection
												title
												paragraph
												itemsDisplayedPerPage
												gallery {
													image {
                										altText
                										sourceUrl
                										mediaDetails {
                											height
                											width
                										}
                									}
												}
											}
											... on ${postTypeFlexibleContent}_GallerySlider {
												fieldGroupName
												displaySection
												gallerySlider {
              										title
              										paragraph
													buttonLink {
                										url
                										title
                										target
                									}
              										backgroundImage {
              											altText
              											sourceUrl
              											mediaDetails {
              												height
              												width
              											}
              										}
													
              									}
											}
											... on ${postTypeFlexibleContent}_SkillsExperiences {
            									fieldGroupName
												displaySection
            									title
            									paragraph
												image {
													altText
													sourceUrl
													mediaDetails {
														height
														width
													}
												}
            									skillsExperiencesGrid {
            										text
													image {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
            									}
            								}
											... on ${postTypeFlexibleContent}_VideoBlock {
												fieldGroupName
												displaySection
												title
												video
												subtitle
												paragraph
												displayVideo
												buttonLink {
													url
													title
													target
												}
												videoBackgroundImage {
            										sourceUrl
              									}
											}
											... on ${postTypeFlexibleContent}_Cta {
												fieldGroupName
												title
												paragraph
												displaySection
												buttonLink {
													url
													title
													target
												}
												backgroundImage {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
            										}
            									}
											}
											... on ${postTypeFlexibleContent}_CtaTwo {
												fieldGroupName
												paragraph
												displaySection
												buttonLink {
													url
													title
													target
												}
											}
											... on ${postTypeFlexibleContent}_Testimonials {
												fieldGroupName
												displaySection
												title
												subtitle
											}
											... on ${postTypeFlexibleContent}_TestimonialsGrid {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
											}
											... on ${postTypeFlexibleContent}_RequestAppointmentForm {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												buttonLink {
													url
													title
													target
												}
											}
											... on ${postTypeFlexibleContent}_TitleContentImage {
            									fieldGroupName
												displaySection
            									title
            									textTitle
            									subtitle
            									paragraph
            									image {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
            										}
            									}
            									buttonLink {
            										url
            										title
            										target
            									}
            									bulletPoints {
            										points
            									}
            									displayContentOption
            									displayImageClipPath
            									displayParagraphColor
            									displayBackgroundColor
            								}
											... on ${postTypeFlexibleContent}_TeamMembers {
            									fieldGroupName
            									displaySection
            									title
            									paragraph
            									teamMembersGrid {
            										name
            										position
            										facebookLink {
            											url
            											title
            											target
            										}
            										twitterLink {
            											url
            											title
            											target
            										}
            										instagramLink {
            											url
            											title
            											target
            										}
            										linkedinLink {
            											url
            											title
            											target
            										}
            										image {
            											altText
            											sourceUrl
            											mediaDetails {
            											  	height
            											  	width
            											}
            										}
            									}
            								}
            								... on ${postTypeFlexibleContent}_ExecutiveLeadershipsTeam {
            									fieldGroupName
            									displaySection
            									title
            									paragraph
            									leadershipTeamGrid {
            										name
            										position
            										facebookLink {
            											url
            											title
            											target
            										}
            										twitterLink {
            											url
            											title
            											target
            										}
            										instagramLink {
            											url
            											title
            											target
            										}
            										linkedinLink {
            											url
            											title
            											target
            										}
            										image {
            											altText
            											sourceUrl
            											mediaDetails {
            												height
            												width
            											}
            										}
            									}
            								}
											... on ${postTypeFlexibleContent}_OurClients {
            									fieldGroupName
            									displaySection
            									title
            									clientsGrid {
            										image {
            											altText
            											sourceUrl
            											mediaDetails {
            											  	height
            											  	width
            											}
            										}
            									}
            								}
											... on ${postTypeFlexibleContent}_FeaturedProjects {
            									fieldGroupName
            									displaySection
            									title
            									subtitle
            									buttonLink {
            										url
            										title
            										target
            									}
            									lastSlideImage {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
            										}
            									}
            								}
											... on ${postTypeFlexibleContent}_ContactForm {
												fieldGroupName
												displaySection
												title
												paragraph
												image {
            										altText
            										sourceUrl
            										mediaDetails {
            											height
            											width
            										}
            									}
											}
											... on ${postTypeFlexibleContent}_Careers {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
											}
											... on ${postTypeFlexibleContent}_ServicesGrid {
												fieldGroupName
												displaySection
												title
												subtitle
												paragraph
												servicesGrid {
													title
													paragraph
													link {
														url
														title
														target
													}
													image {
														altText
														sourceUrl
														mediaDetails {
															height
															width
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return {
			content:
				response.data?.mainContent?.edges[0]?.node?.template?.flexibleContent
					?.flexibleContent,
		};
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all flexible content components"
		);
	}
};
