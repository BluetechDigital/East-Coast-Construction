"use client";

// Imports
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {fadeInUp, initial, stagger} from "@/animations/animations";

const CareersGrid: FC = () => {
	const globalContext = useGlobalContext();

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
			{globalContext?.careers?.length > 0 ? (
				globalContext?.careers?.map((item: any, keys: number) => (
					<Fragment key={keys}>
						<div className="">{item?.node?.title}</div>
					</Fragment>
				))
			) : (
				<></>
			)}
		</div>
	);
};

export default CareersGrid;
