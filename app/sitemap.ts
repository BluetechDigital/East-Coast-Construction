// Imports
import {
	getAllPagesSlugs,
	getAllServicesPagesSlugs,
} from "@/functions/graphql/Queries/GetAllPagesSlugs";
import {MetadataRoute} from "next";
import {getAllDevelopmentsSlugs} from "@/functions/graphql/Queries/GetAllDevelopments";

const sitemap = async () => {
	const [pagesSlugs, developmentsSlugs, ourServicesSlugs] = await Promise.all([
		getAllPagesSlugs(),
		getAllDevelopmentsSlugs(),
		getAllServicesPagesSlugs(),
	]);

	const siteUrl: any = process.env.SITE_URL;

	/* Pages, Services, News Insights Posts Arrays */
	const pagesLinks: any = [];
	const developmentsLinks: any = [];
	const ourServicesLinks: any = [];

	// Pages Dynamic Links
	pagesSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/${keys?.slug}`,
			lastModified: `${keys?.modified}`,
			changeFrequency: "monthly",
			priority: 0.8,
		};

		pagesLinks.push(object);
	});

	// Our Developments Dynamic Links
	developmentsSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/developments/${keys?.slug}`,
			lastModified: `${keys?.modified}`,
			changeFrequency: "daily",
			priority: 0.8,
		};

		developmentsLinks.push(object);
	});

	// Our Services Dynamic Links
	ourServicesSlugs?.map((keys: any) => {
		const object = {
			url: `${siteUrl}/services/${keys?.slug}`,
			lastModified: `${keys?.modified}`,
			changeFrequency: "daily",
			priority: 0.8,
		};

		ourServicesLinks.push(object);
	});

	// Arrays with your all dynamic links
	const allLinks: MetadataRoute.Sitemap = [
		...pagesLinks,
		...ourServicesLinks,
		...developmentsLinks,
	];

	return allLinks;
};

export default sitemap;
