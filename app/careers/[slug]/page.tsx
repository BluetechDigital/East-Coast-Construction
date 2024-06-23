// Imports
import type {Metadata, NextPage} from "next";
import {flexibleContentType, postType} from "@/context/pages";

// Queries Functions
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import BackToTopButton from "@/components/Elements/BackToTopButton";
import PageContextProvider from "@/context/providers/PageContextProvider";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

// Dynamic Pages Generated Metadata
export async function generateMetadata({params}: any): Promise<Metadata> {
	const seo: any = await getAllSeoContent(params?.slug, postType?.careers);

	return {
		title: seo?.title,
		description: seo?.metaDesc,
	};
}

const dynamicPages: NextPage = async ({params}: any) => {
	// Fetch priority content
	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		params?.slug,
		postType?.careers,
		flexibleContentType?.pages
	);

	return (
		<>
			<PageContextProvider
				content={flexibleContentComponents?.content}
				postTypeFlexibleContent={flexibleContentType?.pages}
			>
				<BackToTopButton link={`#`} />
				<RenderFlexibleContent />
			</PageContextProvider>
		</>
	);
};

export default dynamicPages;
