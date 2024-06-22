// Components
export type IHero = {
	title: string;
	ctaParagraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type ICTATwo = {
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IHeroTwo = {
	title: string;
	paragraph: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IVideoBlock = {
	title: string;
	video: string;
	subtitle: string;
	paragraph: string;
	displayVideo: boolean;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	videoBackgroundImage: {
		sourceUrl: string;
	};
};
export type IOurServices = {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	servicesGrid: [
		{
			title: string;
			paragraph: string;
			link: {
				url: string;
				title: string;
				target: string;
			};
			icon: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
};
export type ITestimonials = {
	title: string;
	subtitle: string;
};
export type IGallerySlider = {
	gallerySlider: [
		{
			title: string;
			paragraph: string;
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
			backgroundImage: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
};
export type IAccreditations = {
	paragraph: string;
	accreditationsGrid: [
		{
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
};
export type ITitleParagraph = {
	title: string;
	paragraph: string;
	displayParagraph: boolean;
};
export type ITestimonialsGrid = {
	title: string;
	subtitle: string;
	paragraph: string;
};
export type ISkillsExperiences = {
	title: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
	skillsExperiencesGrid: [
		{
			text: string;
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
};
export type IAboutContentImage = {
	title: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	cardOne: {
		title: string;
		subtitle: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		buttonLinkTwo: {
			url: string;
			title: string;
			target: string;
		};
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	cardTwo: {
		title: string;
		subtitle: string;
		link: {
			url: string;
			title: string;
			target: string;
		};
	};
	cardThree: {
		title: string;
		subtitle: string;
		link: {
			url: string;
			title: string;
			target: string;
		};
	};
};
export type IContentSectorGrid = {
	title: string;
	subtitle: string;
	paragraph: string;
	sectorGrid: [
		{
			title: string;
			link: {
				url: string;
				title: string;
				target: string;
			};
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
};
export type IRequestAppointmentForm = {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};

// Global
export type IPagination = {
	contentArray: any;
	contentType: string;
	tailwindStyling: string;
	numberOfItemsRenderedPerPage: number;
};

// Cards
export type IHeroCard = {
	text: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type ITeamMembersCard = {
	name: string;
	position: string;
	facebookLink: string;
	twitterLink: string;
	linkedinLink: string;
	instagramLink: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IDevelopmentsCard = {
	slug: string;
	date: string;
	title: string;
	excerpt: string;
	featuredImage: {
		node: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
};
export type IOurServicesCard = {
	title: string;
	paragraph: string;
	link: {
		url: string;
		title: string;
		target: string;
	};
};
export type IServicesGridCard = {
	title: string;
	paragraph: string;
	link: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type ITestimonialsCard = {
	name: string;
	rating: number;
	position: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IOurServicesCardTwo = {
	title: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IContentSectorGridCard = {
	title: string;
	link: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type ITitleContentImageCard = {
	title: string;
	subtitle: string;
	paragraph: string;
	textTitle: string;
	paragraphColor: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	bulletPoints: [
		{
			points: string;
		}
	];
};
export type IExecutiveLeadershipsTeamCard = {
	name: string;
	position: string;
	facebookLink: string;
	twitterLink: string;
	linkedinLink: string;
	instagramLink: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};

// Elements
export type ITitle = {
	content: string;
	tailwindStyling: string;
};
export type ISideMenu = {
	menuActive: boolean;
	setMenuActive: any;
};
export type IParagraph = {
	content: string;
	tailwindStyling: string;
};
export type INewsletter = {
	paragraph: string;
};
export type IRenderStars = {
	rating: number;
	color: string;
};
export type IVideoWrapper = {
	children: React.ReactNode;
};
export type IYoutubeButton = {
	title: string;
	fullWidth: boolean;
	displayYoutubeIcon: boolean;
};
export type IBackHoverButton = {
	link: string;
};
export type IBookAppointment = {
	link: string;
};
