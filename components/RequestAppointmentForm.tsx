"use client";

// Imports
import Link from "next/link";
import React, {FC} from "react";
import {motion} from "framer-motion";
import {useGlobalContext} from "@/context/global";
import {IRequestAppointmentForm} from "@/types/components";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Styling
import styles from "@/styles/components/Forms.module.scss";

// Components
import Paragraph from "./Elements/Paragraph";
import RequestAppointmentFormikForm from "./Elements/RequestAppointmentFormikForm";

const RequestAppointmentForm: FC<IRequestAppointmentForm> = ({
	title,
	subtitle,
	paragraph,
	buttonLink,
}) => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div
				className={
					styles.requestAppointmentForm +
					" px-4 py-10 bg-white requestAppointmentForm"
				}
			>
				<div className="lg:container mx-auto px-0 flex flex-col lg:flex-row items-baseline justify-between gap-8">
					<div className="flex flex-col items-center justify-center lg:items-baseline w-full">
						<motion.div
							initial={initial}
							variants={stagger}
							whileInView="animate"
							viewport={{once: true}}
							className="mb-4"
						>
							<motion.h4
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="font-aspektaMain uppercase text-center lg:text-left text-base text-accent-default"
							>
								{subtitle}
							</motion.h4>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="my-3 max-w-2xl mx-auto lg:mx-0 text-black uppercase font-aspektaMain leading-relaxed text-center lg:text-left text-lg sm:text-xl lg:text-4xl"
							>
								{title}
							</motion.h3>

							<Paragraph
								content={paragraph}
								tailwindStyling="max-w-xl mx-auto xl:mx-0 text-black text-lg text-center lg:text-left"
							/>
						</motion.div>
						<div className="flex flex-col lg:flex-row gap-8 items-center justify-center lg:gap-12 lg:justify-start">
							<Link
								href={`${buttonLink?.url}`}
								target={buttonLink?.target}
								className={`${buttonLink?.url ? "block" : "hidden"}`}
							>
								<div
									className={`w-fit mx-auto lg:mx-0 py-4 px-6 text-center cursor-pointer bg-accent-default hover:bg-accent-two transition-all ease-in-out duration-500`}
								>
									<span className="tracking-[0.10rem] text-white text-tiny md:text-base text-center uppercase font-aspektaMain">
										{buttonLink?.title}
									</span>
								</div>
							</Link>
							<motion.div
								initial={initial}
								variants={stagger}
								whileInView="animate"
								viewport={{once: true}}
								className="flex items-center"
							>
								<div className="hidden sm:flex flex-shrink-0 mr-5  items-center justify-center p-1 w-10 h-10 rounded-full bg-black">
									<svg
										viewBox="0 0 24 24"
										fill="none"
										className="w-5 h-5"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											strokeLinecap="round"
											strokeLinejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											{" "}
											<path
												d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9995 16.4767V19.1864C21.0037 20.2223 20.0723 21.0873 19.0265 20.9929C10.0001 21 3.00006 13.935 3.00713 4.96919C2.91294 3.92895 3.77364 3.00106 4.80817 3.00009H7.52331C7.96253 2.99577 8.38835 3.151 8.72138 3.43684C9.66819 4.24949 10.2772 7.00777 10.0429 8.10428C9.85994 8.96036 8.99696 9.55929 8.41026 10.1448C9.69864 12.4062 11.5747 14.2785 13.8405 15.5644C14.4272 14.9788 15.0274 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.858 15.6021 21.0105 16.0337 20.9995 16.4767Z"
												stroke="#ffffff"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>{" "}
										</g>
									</svg>
								</div>
								<motion.div
									initial={initial}
									variants={stagger}
									whileInView="animate"
									viewport={{once: true}}
									className="max-w-xl mx-auto sm:mx-0"
								>
									<motion.h3
										initial={initial}
										whileInView={fadeInUp}
										viewport={{once: true}}
										className="mb-2 uppercase font-aspektaMain text-black text-center sm:text-left font-semibold text-base"
									>
										Phone
									</motion.h3>
									<Link
										className="block text-tiny sm:text-base text-black text-center sm:text-left hover:text-primary-default"
										href={`tel:${globalContext?.themesOptionsContent?.phoneNumber}`}
									>
										{globalContext?.themesOptionsContent?.phoneNumber}
									</Link>
									<Link
										className="block text-tiny sm:text-base text-black text-center sm:text-left hover:text-primary-default"
										href={`tel:${globalContext?.themesOptionsContent?.phoneNumberTwo}`}
									>
										{globalContext?.themesOptionsContent?.phoneNumberTwo}
									</Link>
								</motion.div>
							</motion.div>
						</div>
					</div>
					<RequestAppointmentFormikForm />
				</div>
			</div>
		</>
	);
};

export default RequestAppointmentForm;
