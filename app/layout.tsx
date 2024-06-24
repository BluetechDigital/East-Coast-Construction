// Imports
import type {AppProps} from "next/app";

// Styling
import "../styles/globals.scss";

// Global Context Provider
import {IGlobalProps} from "@/types/context";

// Queries Functions
import {
	getMobileLinks,
	getCopyrightLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getOurServicesSublinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {getAllCareersContent} from "@/functions/graphql/Queries/GetAllCareers";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {getAllTestimonialsContent} from "@/functions/graphql/Queries/GetAllTestimonials";
import {getAllDevelopmentsContent} from "@/functions/graphql/Queries/GetAllDevelopments";

// Components
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import GlobalContextProvider from "@/context/providers/GlobalContextProvider";
import ApolloContextProvider from "@/context/providers/ApolloContextProvider";

const App = async ({children}: AppProps | any) => {
	// PUBLIC PAGES //
	/* Fetch all global content
	remaining content simultaneously */
	const promises: Promise<any>[] = [
		getMobileLinks(),
		getCopyrightLinks(),
		getNavbarMenuLinks(),
		getFooterMenuLinks(),
		getAllCareersContent(),
		getOurServicesSublinks(),
		getThemesOptionsContent(),
		getAllDevelopmentsContent(),
		getAllTestimonialsContent(),

		// Football Fixtures
		// getLastThreeFixturesContent(),
	];

	const [
		mobileLinks,
		copyrightLinks,
		navbarMenuLinks,
		footerMenuLinks,
		careers,
		servicesSublinks,
		themesOptionsContent,
		developments,
		testimonials,

		// Football Fixtures
		// lastThreeFixtures,
	] = await Promise.all(promises);

	const globalProps: IGlobalProps = {
		careers: careers,
		mobileLinks: mobileLinks,
		developments: developments,
		testimonials: testimonials,
		copyrightLinks: copyrightLinks,
		navbarMenuLinks: navbarMenuLinks,
		footerMenuLinks: footerMenuLinks,
		servicesSublinks: servicesSublinks,
		themesOptionsContent: themesOptionsContent,
	};

	return (
		<html lang="en">
			<body>
				<ApolloContextProvider>
					<GlobalContextProvider globalProps={globalProps}>
						<Navbar />
						<main>{children}</main>
						<Footer />
					</GlobalContextProvider>
				</ApolloContextProvider>
			</body>
		</html>
	);
};

export default App;
