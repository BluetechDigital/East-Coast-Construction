export type ISeo = {
	canonical: string;
	cornerstone: Boolean;
	focuskw: string;
	fullHead: string;
	metaDesc: string;
	metaKeywords: string;
	metaRobotsNofollow: string;
	metaRobotsNoindex: string;
	opengraphAuthor: string;
	opengraphDescription: string;
	opengraphImage: {
		mediaItemUrl: string;
	};
	opengraphModifiedTime: string;
	opengraphPublishedTime: string;
	opengraphPublisher: string;
	opengraphSiteName: string;
	opengraphTitle: string;
	opengraphType: string;
	opengraphUrl: string;
	readingTime: number;
	title: string;
	twitterDescription: string;
	twitterTitle: string;
	twitterImage: {
		mediaItemUrl: string;
	};
};
export type IContent = [
	{
		content: any;
	}
];
export type ICareers = [
	{
		node: {
			id: string;
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
	}
];
export type IPostTypes = {
	pages: string;
	posts: string;
	careers: string;
	previewPage: string;
	previewPost: string;
	testimonials: string;
	developments: string;
};
export type IDevelopments = [
	{
		node: {
			id: string;
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
	}
];
export type ITestimonials = [
	{
		node: {
			testimonialReview: {
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
		};
	}
];
export type IThemesOptionsContent = {
	email: string;
	address: string;
	emailTwo: string;
	textarea: string;
	businessHours: string;
	phoneNumber: string;
	phoneNumberTwo: string;
	phoneNumberThree: string;
	copyrightText: string;
	facebookLink: {
		url: string;
		title: string;
		target: string;
	};
	twitterLink: {
		url: string;
		title: string;
		target: string;
	};
	linkedinLink: {
		url: string;
		title: string;
		target: string;
	};
	instagramLink: {
		url: string;
		title: string;
		target: string;
	};
	displayNoticeBanner: boolean;
	noticeBannerTextarea: string;
	errorPageContent: {
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
	};
};

// WEBSITE LINKS AND SUBLINKS
export namespace ILinks {
	export type INavbarMenuLinks = {
		node: {
			id: string;
			url: string;
			label: string;
		};
	}[];

	export interface IMobileLinks extends INavbarMenuLinks {}
	export interface ICopyrightLinks extends INavbarMenuLinks {}
	export interface IFooterMenuLinks extends INavbarMenuLinks {}
	export interface IServicesSublinks extends INavbarMenuLinks {}
}

export namespace ITaxonomies {
	export type IJobsPositions = {
		node: {
			slug: string;
			title: string;
			excerpt: string;
			modified: string;
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
	}[];

	export interface IHeadOffice extends IJobsPositions {}
	export interface IFieldOperators extends IJobsPositions {}
}
/* CONTEXT PROVIDERS  */
export type IPageContext = {
	content: IContent;
	postTypeFlexibleContent: string;
};
export type IGlobalProps = {
	careers: ICareers;
	testimonials: ITestimonials;
	developments: IDevelopments;
	themesOptionsContent: IThemesOptionsContent;

	// Taxonomies Jobs Positions
	headOffice: ITaxonomies.IHeadOffice;
	fieldOperators: ITaxonomies.IFieldOperators;

	// Website Links
	mobileLinks: ILinks.IMobileLinks;
	copyrightLinks: ILinks.ICopyrightLinks;
	navbarMenuLinks: ILinks.INavbarMenuLinks;
	footerMenuLinks: ILinks.IFooterMenuLinks;
	servicesSublinks: ILinks.IServicesSublinks;
};
export type IGlobalContext = {
	careers: ICareers;
	developments: IDevelopments;
	testimonials: ITestimonials;
	themesOptionsContent: IThemesOptionsContent;

	// Taxonomies Jobs Positions
	headOffice: ITaxonomies.IHeadOffice;
	fieldOperators: ITaxonomies.IFieldOperators;

	// Website Links
	mobileLinks: ILinks.IMobileLinks;
	copyrightLinks: ILinks.ICopyrightLinks;
	navbarMenuLinks: ILinks.INavbarMenuLinks;
	footerMenuLinks: ILinks.IFooterMenuLinks;
	servicesSublinks: ILinks.IServicesSublinks;
};
export type IPageContextProvider = {
	content: IContent;
	children: React.ReactNode;
	postTypeFlexibleContent: string;
};
export type IFlexibleContentType = {
	pages: string;
	previewPage: string;
	previewPost: string;
};
export type IGlobalContextProvider = {
	globalProps: IGlobalContext;
	children: React.ReactNode;
};
export type IApolloContextProvider = {
	children: React.ReactNode;
};

type SlugResponse = {
	slug: string;
	modified: string;
};

export interface ISlug extends Array<SlugResponse> {}
