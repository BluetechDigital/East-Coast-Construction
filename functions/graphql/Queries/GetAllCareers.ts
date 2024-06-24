import {client} from "@/config/apollo";
import {ISlug} from "@/types/context";
import {DocumentNode, gql} from "@apollo/client";

/* CAREERS SLUGS (URLS) */
export const getAllCareersSlugs = async (): Promise<ISlug> => {
	try {
		const content: DocumentNode = gql`
			{
				careersSlugs: careers(where: {status: PUBLISH}, last: 100) {
					nodes {
						slug
						modified
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.careersSlugs?.nodes;
	} catch (error) {
		console.log(error);
		throw new Error("Something went wrong trying to fetch the careers slugs");
	}
};

// All Careers Content
export const getAllCareersContent = async () => {
	try {
		const content: DocumentNode = gql`
			{
				careersContent: careers(
					where: {status: PUBLISH, orderby: {field: DATE, order: DESC}}
					first: 100
				) {
					edges {
						node {
							slug
							date
							excerpt
							title(format: RENDERED)
							featuredImage {
								node {
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
		`;

		const response: any = await client.query({
			query: content,
		});

		return response?.data?.careersContent?.edges;
	} catch (error) {
		console.log(error);
		throw new Error(
			"Something went wrong trying to fetch all the careers content"
		);
	}
};
