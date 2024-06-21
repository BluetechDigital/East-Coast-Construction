// Imports
import {NextPage, Metadata} from "next";
import {homePage, postType, flexibleContentType} from "@/context/pages";

// Queries Functions
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import PageContextProvider from "@/context/providers/PageContextProvider";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

// Home Page Generated Metadata
export async function generateMetadata(): Promise<Metadata> {
	const seo: any = await getAllSeoContent(homePage, postType?.pages);

	return {
		title: seo?.title,
		description: seo?.metaDesc,
	};
}

const HomePage: NextPage = async () => {
	// Fetch priority content
	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		homePage,
		postType?.pages,
		flexibleContentType?.pages
	);

	return (
		<PageContextProvider
			content={flexibleContentComponents?.content}
			postTypeFlexibleContent={flexibleContentType?.pages}
		>
			<RenderFlexibleContent />
		</PageContextProvider>
	);
};

export default HomePage;
