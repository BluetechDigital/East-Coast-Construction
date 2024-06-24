"use client";

// Imports
import {FC, useState} from "react";
import {useGlobalContext} from "@/context/global";

// Components
import Pagination from "@/components/Elements/Pagination";
import {motion} from "framer-motion";
import {fadeIn, initial, initialTwo, stagger} from "@/animations/animations";

const CareersGrid: FC = () => {
	const globalContext = useGlobalContext();

	const buttonStyling =
		"w-full py-4 px-6 text-center cursor-pointer tracking-[0.10rem] text-white text-tiny md:text-base uppercase font-aspektaMain transition-all ease-in-out duration-500";

	const [allJobsOpen, setAllJobsOpen]: any = useState(true);
	const [fieldOperatorsJobsOpen, setFieldOperatorsJobsOpen]: any =
		useState(false);
	const [headOfficeJobsOpen, setHeadOfficeJobsOpen]: any = useState(false);

	/* Hides or Display
	 All Job Positions */
	const displayAllJobs = () => {
		setAllJobsOpen(!allJobsOpen);
		setHeadOfficeJobsOpen(false);
		setFieldOperatorsJobsOpen(false);
	};

	/* Hides or Display Head Office
	 Taxonomy Job Positions */
	const displayHeadOfficeJobs = () => {
		setAllJobsOpen(false);
		setHeadOfficeJobsOpen(!headOfficeJobsOpen);
		setFieldOperatorsJobsOpen(false);
	};

	/* Hides or Display Field Operators
	 Taxonomy Job Positions */
	const displayFieldOperatorsJobs = () => {
		setAllJobsOpen(false);
		setHeadOfficeJobsOpen(false);
		setFieldOperatorsJobsOpen(!fieldOperatorsJobsOpen);
	};

	return (
		<>
			<div className="w-full ">
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="w-full max-w-4xl flex flex-col md:flex-row py-8 mb-8 items-center justify-center gap-4 lg:gap-2"
				>
					<motion.button
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						onClick={displayAllJobs}
						className={
							allJobsOpen
								? `${buttonStyling} bg-accent-default hover:bg-accent-two`
								: `${buttonStyling} bg-black hover:bg-accent-default`
						}
					>
						All Jobs
					</motion.button>
					<motion.button
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						onClick={displayHeadOfficeJobs}
						className={
							headOfficeJobsOpen
								? `${buttonStyling} bg-primary-light hover:bg-primary-default`
								: `${buttonStyling} bg-black hover:bg-primary-light`
						}
					>
						Head Office
					</motion.button>
					<motion.button
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						onClick={displayFieldOperatorsJobs}
						className={
							fieldOperatorsJobsOpen
								? `${buttonStyling} bg-primary-three hover:bg-primary-default`
								: `${buttonStyling} bg-black hover:bg-primary-three`
						}
					>
						Field Operators
					</motion.button>
				</motion.div>
				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="w-full"
				>
					{allJobsOpen ? (
						<>
							<Pagination
								contentType="CareersGridCard"
								numberOfItemsRenderedPerPage={12}
								contentArray={globalContext?.careers}
								tailwindStyling="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
							/>
						</>
					) : headOfficeJobsOpen ? (
						<>
							<Pagination
								contentType="CareersGridCard"
								numberOfItemsRenderedPerPage={12}
								contentArray={globalContext?.headOffice}
								tailwindStyling="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
							/>
						</>
					) : fieldOperatorsJobsOpen ? (
						<>
							<Pagination
								contentType="CareersGridCard"
								numberOfItemsRenderedPerPage={12}
								contentArray={globalContext?.fieldOperators}
								tailwindStyling="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
							/>
						</>
					) : (
						<></>
					)}
				</motion.div>
			</div>
		</>
	);
};

export default CareersGrid;
