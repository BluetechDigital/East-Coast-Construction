"use client";

// Imports
import {
	fadeIn,
	initial,
	stagger,
	fadeInUp,
	initialTwo,
} from "@/animations/animations";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import React, {useState, FC} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {sendContactForm} from "@/lib/contactForm";
import {useFormik, Formik, Field, Form} from "formik";

// Styling
import styles from "@/styles/components/RequestAppointmentForm.module.scss";

const RequestAppointmentFormikForm = () => {
	const router = useRouter();

	// Loading, Send & Error Message States
	const [loading, setLoading] = useState(false);
	const [messageSent, setMessageSent] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	// A custom validation function. This must return an object
	// which keys are symmetrical to our values/initialValues
	const validate: any = (values: any) => {
		const errors: any = {};
		if (!values?.fullName) {
			errors.fullName = "Required*";
		} else if (values?.fullName.length >= 26) {
			errors.fullName = "Must be 25 characters or less";
		}

		if (!values?.phoneNumber) {
			errors.phoneNumber = "Required*";
		} else if (values?.phoneNumber.length < 1) {
			errors.phoneNumber = "Please inform us about the topic.";
		}

		if (!values?.subject) {
			errors.subject = "Required*";
		} else if (values?.subject.length <= 0) {
			errors.subject = "Please inform us about the topic.";
		}

		if (!values?.message) {
			errors.message = "Required*";
		} else if (values?.message.length <= 0) {
			errors.message = "Please tell us about your Inquiry.";
		}

		return errors;
	};

	// Google ReCaptcha Validation
	const [reCaptchaResult, setReCaptchaResult] = useState(null);
	const googleReCaptchaValidate = (value: any) => {
		return value;
	};

	const handleReCaptchaChange = (response: any) => {
		const result = googleReCaptchaValidate(response);
		setReCaptchaResult(result);
	};

	/* Contact Form Fields
	And Initial Values */
	const formik: any = useFormik({
		initialValues: {
			fullName: "",
			phoneNumber: "",
			subject: "",
			message: "",
		},
		validate,
		onSubmit: async (values: any) => {
			if (reCaptchaResult) {
				try {
					console.log(values);
					await sendContactForm(values);
				} catch (error) {
					setErrorMessage(true);
					throw new Error(
						"Error Message: Something went wrong with Sending your Message. Please try again."
					);
				}
			} else {
				throw new Error(
					"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
				);
			}
		},
	});

	// Form Submission
	const onFormSubmit = (event: any) => {
		event.preventDefault();
		setErrorMessage(false);
		if (reCaptchaResult) {
			try {
				setLoading(true);
				/* Send Form Content */
				formik.handleSubmit();
				setLoading(false);
				setMessageSent(true);
				setTimeout(() => {
					// router.reload();
				}, 3000);
			} catch (error) {
				setErrorMessage(true);
				throw new Error(
					"Error Message: Something went wrong with Sending your Message. Please try again."
				);
			}
		} else {
			throw new Error(
				"Error Message: Something went wrong with your Google Recaptcha validation. Please try again."
			);
		}
	};

	return (
		<>
			<Formik onSubmit={formik?.onSubmit} initialValues={formik?.initialValues}>
				<Form
					className="py-6 px-12 xl:mr-8 w-full bg-black max-w-full lg:max-w-md xl:max-w-xl bg-center bg-no-repeat bg-cover"
					style={{
						backgroundImage: `linear-gradient(
								0deg,
								rgb(1, 1, 1, 0.25),
								rgba(1, 1, 1, 0.25),
								rgba(1, 1, 1, 0.25)
							),url("/img/background/Cement-Floor-Background.jpg")`,
					}}
				>
					{loading ? (
						<motion.div
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="flex items-center justify-center my-4 mb-8 gap-x-2"
						>
							<h3 className="text-xl font-semibold uppercase font-aspektaMain text-white">
								Sending Message...
							</h3>
						</motion.div>
					) : messageSent ? (
						<motion.div
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="flex items-center justify-center my-4 mb-8 gap-x-2"
						>
							<h3 className="text-xl font-semibold text-center uppercase font-aspektaMain text-white">
								Message Sent!
							</h3>
						</motion.div>
					) : errorMessage ? (
						<motion.div
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="flex items-center justify-center my-4 mb-8 gap-x-2"
						>
							<h3 className="text-xl font-semibold text-center uppercase font-aspektaMain text-white">
								Error Message: Something went wrong with sending your message.
								Please try again.
							</h3>
						</motion.div>
					) : (
						<motion.div
							initial={initialTwo}
							whileInView={fadeIn}
							viewport={{once: true}}
							className="mb-6"
						>
							<motion.h3
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="my-3 max-w-xl mx-auto xl:mx-0 uppercase font-aspektaMain text-white text-center lg:text-left font-semibold text-lg md:text-lg"
							>
								Make an Appointment
							</motion.h3>
						</motion.div>
					)}

					<motion.div
						initial={initial}
						variants={stagger}
						whileInView="animate"
						viewport={{once: true}}
						className="flex flex-col gap-4"
					>
						<div className="flex flex-col md:flex-row gap-4">
							<motion.div
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="w-full"
							>
								{formik?.touched?.fullName && formik?.errors?.fullName ? (
									<div>
										<p className="py-1 text-left text-tiny md:text-base text-white">
											{formik?.errors?.fullName}
										</p>
									</div>
								) : null}
								<Field
									id="fullName"
									name="fullName"
									placeholder="Full Name"
									onBlur={formik?.handleBlur}
									onChange={formik?.handleChange}
									value={formik?.values?.fullName}
									className="px-4 py-3 w-full text-tiny md:text-base text-black placeholder-black bg-white bg-opacity-90 outline-none border-[1px] border-white active:border-primary-darker focus:border-primary-darker focus:ring-[1px] focus:ring-primary-darker"
								/>
							</motion.div>
							<motion.div
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="w-full"
							>
								{formik?.touched?.phoneNumber && formik?.errors?.phoneNumber ? (
									<div>
										<p className="py-1 text-left text-tiny md:text-base text-white">
											{formik?.errors?.phoneNumber}
										</p>
									</div>
								) : null}
								<Field
									id="phoneNumber"
									name="phoneNumber"
									type="text"
									placeholder="Phone Number"
									onBlur={formik?.handleBlur}
									onChange={formik?.handleChange}
									value={formik?.values?.phoneNumber}
									className="px-4 py-3 w-full text-tiny md:text-base text-black placeholder-black bg-white bg-opacity-90 outline-none border-[1px] border-white active:border-primary-darker focus:border-primary-darker focus:ring-[1px] focus:ring-primary-darker"
								/>
							</motion.div>
						</div>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="w-full"
						>
							{formik?.touched?.subject && formik?.errors?.subject ? (
								<div>
									<p className="py-1 text-left text-tiny md:text-base text-white">
										{formik?.errors?.subject}
									</p>
								</div>
							) : null}
							<Field
								id="subject"
								name="subject"
								type="text"
								placeholder="Subject"
								onBlur={formik?.handleBlur}
								onChange={formik?.handleChange}
								value={formik?.values?.subject}
								className="px-4 py-3 w-full text-tiny md:text-base text-black placeholder-black bg-white bg-opacity-90 outline-none border-[1px] border-white active:border-primary-darker focus:border-primary-darker focus:ring-[1px] focus:ring-primary-darker"
							/>
						</motion.div>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
						>
							{formik?.touched?.message && formik?.errors?.message ? (
								<div>
									<p className="py-1 text-left text-tiny md:text-base text-white">
										{formik?.errors?.message}
									</p>
								</div>
							) : null}
							<textarea
								rows={5}
								id="message"
								name="message"
								placeholder="Your message"
								onBlur={formik?.handleBlur}
								onChange={formik?.handleChange}
								value={formik?.values?.message}
								className="p-4 w-full h-32 text-tiny md:text-base text-black placeholder-black bg-white bg-opacity-90 outline-none border-[1px] border-white active:border-primary-darker focus:border-primary-darker resize-none focus:ring-[1px] focus:ring-primary-darker"
							/>
						</motion.div>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className={
								formik?.touched?.fullName ||
								formik?.touched?.lastName ||
								formik?.touched?.email
									? "block"
									: "hidden"
							}
						>
							<ReCAPTCHA
								sitekey={`6LcWH_4pAAAAAGrGpWg6H4J6yXW3EdmRWUWTqQ_F`}
								onChange={handleReCaptchaChange}
							/>
						</motion.div>
						<motion.button
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							onClick={onFormSubmit}
							disabled={
								!formik?.values?.fullName ||
								!formik?.values?.lastName ||
								!formik?.values?.email ||
								!formik?.values?.phoneNumber ||
								!formik?.values?.selectedServices ||
								!formik?.values?.subject ||
								!formik?.values?.message ||
								reCaptchaResult === null ||
								reCaptchaResult === undefined
							}
							className="w-fit mx-auto lg:mx-0 text-white font-semibold tracking-wide disabled:bg-opacity-20 disabled:cursor-not-allowed"
							type="submit"
						>
							<span
								className={
									messageSent
										? `${styles.messageSent}`
										: `${styles.submitButton}`
								}
							>
								<span className="tracking-widest text-white uppercase font-aspektaMain text-sm">
									{loading
										? "Sending Message..."
										: messageSent
										? "Message Sent!"
										: errorMessage
										? "Sending Error!"
										: "Request A Quote"}
								</span>
							</span>
						</motion.button>
					</motion.div>
				</Form>
			</Formik>
		</>
	);
};

export default RequestAppointmentFormikForm;
