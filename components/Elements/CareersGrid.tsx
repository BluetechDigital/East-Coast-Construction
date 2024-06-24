"use client";

// Imports
import {FC} from "react";
import {useGlobalContext} from "@/context/global";

// Components
import Pagination from "@/components/Elements/Pagination";

const CareersGrid: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<Pagination
				contentType="CareersGridCard"
				numberOfItemsRenderedPerPage={12}
				contentArray={globalContext?.careers}
				tailwindStyling="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
			/>
		</>
	);
};

export default CareersGrid;
