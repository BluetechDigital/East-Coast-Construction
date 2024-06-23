"use client";

// Imports
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import {useGlobalContext} from "@/context/global";
import {sendContactForm} from "@/lib/contactForm";
import React, {useState, FC, Fragment} from "react";
import {useFormik, Formik, Field, Form} from "formik";
import {initial, stagger, fadeInUp} from "@/animations/animations";

// Styling
import styles from "@/styles/components/ContactForm.module.scss";

const FormikForm: FC = () => {
	const router = useRouter();
	const globalContext = useGlobalContext();

	// Loading, Send & Error Message States
	const [loading, setLoading] = useState(false);
	const [messageSent, setMessageSent] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	// A custom validation function. This must return an object
	// which keys are symmetrical to our values/initialValues
	const validate: any = (values: any) => {
		const errors: any = {};
		if (!values?.firstName) {
			errors.firstName = "Required*";
		} else if (values?.firstName.length >= 16) {
			errors.firstName = "Must be 15 characters or less";
		}

		if (!values.lastName) {
			errors.lastName = "Required*";
		} else if (values.lastName.length >= 21) {
			errors.lastName = "Must be 20 characters or less";
		}

		if (!values?.email) {
			errors.email = "Required*";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values?.email)
		) {
			errors.email = "Invalid email address";
		}

		if (!values?.phoneNumber) {
			errors.phoneNumber = "Required*";
		} else if (values?.phoneNumber.length < 1) {
			errors.phoneNumber = "Please inform us about the topic.";
		}

		if (!values?.selectedServices) {
			errors.selectedServices = "Required*";
		} else if (values?.selectedServices.length <= 0) {
			errors.selectedServices = "Please inform us about the topic.";
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
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			selectedServices: "",
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
		<Formik onSubmit={formik?.onSubmit} initialValues={formik?.initialValues}>
			<Form
				className="lg:container mx-auto p-10 lg:px-32 md:max-w-4xl bg-accent-default bg-center bg-no-repeat bg-cover"
				style={{
					backgroundImage: `linear-gradient(
										0deg,
										rgba(255, 255, 255, 0.40),
										rgba(255, 255, 255, 0.35),
										rgba(255, 255, 255, 0.25),
										rgba(255, 255, 255, 0.1),
										rgba(255, 255, 255, 0.1)
									),url("/img/background/Cement-Floor-Background.jpg")`,
				}}
			>
				{loading ? (
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="mb-6 my-3 font-aspektaMain uppercase text-black text-center font-semibold text-lg sm:text-xl lg:text-4xl"
					>
						Get In Touch
					</motion.h3>
				) : messageSent ? (
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="mb-6 my-3 font-aspektaMain uppercase text-accent-default text-center font-semibold text-lg sm:text-xl lg:text-4xl"
					>
						Get In Touch
					</motion.h3>
				) : errorMessage ? (
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="mb-6 my-3 font-aspektaMain uppercase text-[#e20031] text-center font-semibold text-lg sm:text-xl lg:text-4xl"
					>
						Get In Touch
					</motion.h3>
				) : (
					<motion.h3
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="mb-6 my-3 font-aspektaMain uppercase text-black text-center font-semibold text-lg sm:text-xl lg:text-4xl"
					>
						Get In Touch
					</motion.h3>
				)}

				<motion.div
					initial={initial}
					variants={stagger}
					whileInView="animate"
					viewport={{once: true}}
					className="flex flex-col gap-4"
				>
					<div className="flex flex-col sm:flex-row gap-4">
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="w-full"
						>
							{formik?.touched?.firstName && formik?.errors?.firstName ? (
								<div>
									<p className="py-1 text-left text-tiny text-primary-darker ">
										{formik?.errors?.firstName}
									</p>
								</div>
							) : null}
							<Field
								id="firstName"
								name="firstName"
								placeholder="First Name"
								onBlur={formik?.handleBlur}
								onChange={formik?.handleChange}
								value={formik?.values?.firstName}
								className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-white active:border-primary-darker focus:border-primary-darker focus:ring-[1px] focus:ring-primary-darker"
							/>
						</motion.div>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="w-full"
						>
							{formik?.touched?.lastName && formik?.errors?.lastName ? (
								<div>
									<p className="py-1 text-left text-tiny text-primary-darker ">
										{formik?.errors?.lastName}
									</p>
								</div>
							) : null}
							<Field
								id="lastName"
								name="lastName"
								placeholder="Last Name"
								onBlur={formik?.handleBlur}
								onChange={formik?.handleChange}
								value={formik?.values?.lastName}
								className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-white active:border-primary-darker focus:border-primary-darker focus:ring-[1px] focus:ring-primary-darker"
							/>
						</motion.div>
					</div>
					<div className="flex flex-col sm:flex-row gap-4">
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="w-full"
						>
							{formik?.touched?.phoneNumber && formik?.errors?.phoneNumber ? (
								<div>
									<p className="py-1 text-left text-tiny text-primary-darker ">
										{formik?.errors?.phoneNumber}
									</p>
								</div>
							) : null}
							<Field
								id="phoneNumber"
								name="phoneNumber"
								type="number"
								placeholder="Phone Number"
								onBlur={formik?.handleBlur}
								onChange={formik?.handleChange}
								value={formik?.values?.phoneNumber}
								className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-white active:border-primary-darker focus:border-primary-darker focus:ring-[1px] focus:ring-primary-darker"
							/>
						</motion.div>
						<motion.div
							initial={initial}
							whileInView={fadeInUp}
							viewport={{once: true}}
							className="w-full"
						>
							{formik?.touched?.subject && formik?.errors?.subject ? (
								<div>
									<p className="py-1 text-left text-tiny text-primary-darker ">
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
								className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-white active:border-primary-darker focus:border-primary-darker focus:ring-[1px] focus:ring-primary-darker"
							/>
						</motion.div>
					</div>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="w-full"
					>
						{formik?.touched?.email && formik?.errors?.email ? (
							<div>
								<p className="py-1 text-left text-tiny text-primary-darker ">
									{formik?.errors?.email}
								</p>
							</div>
						) : null}
						<Field
							id="email"
							name="email"
							type="email"
							placeholder="Email Address"
							onBlur={formik?.handleBlur}
							onChange={formik?.handleChange}
							value={formik?.values?.email}
							className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-white active:border-primary-darker focus:border-primary-darker focus:ring-[1px] focus:ring-primary-darker"
						/>
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className="w-full"
					>
						{formik?.touched?.selectedServices &&
						formik?.errors?.selectedServices ? (
							<div>
								<p className="py-1 text-left text-tiny text-primary-darker ">
									{formik?.errors?.selectedServices}
								</p>
							</div>
						) : null}
						<Field
							as="select"
							id="selectedServices"
							name="selectedServices"
							placeholder="Pick a Service"
							onBlur={formik?.handleBlur}
							onChange={formik?.handleChange}
							value={formik?.values?.selectedServices}
							className="px-4 py-3 w-full text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-white active:border-primary-darker focus:border-primary-darker focus:ring-[1px] focus:ring-primary-darker"
						>
							<option
								disabled
								value=""
								className={
									formik?.touched?.selectedServices ? "hidden" : "block"
								}
							>
								Services
							</option>
							{globalContext?.servicesSublinks?.length > 0 ? (
								globalContext?.servicesSublinks?.map(
									(item: any, keys: number) => (
										<Fragment key={keys}>
											<option value={item?.node?.label}>
												{item?.node?.label}
											</option>
										</Fragment>
									)
								)
							) : (
								<></>
							)}
							<option value="Other">Other</option>
						</Field>
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
					>
						{formik?.touched?.message && formik?.errors?.message ? (
							<div>
								<p className="py-1 text-left text-tiny text-primary-darker ">
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
							className="p-4 w-full h-48  text-darkGrey placeholder-darkGrey bg-white bg-opacity-90 outline-none border-[1px] border-white active:border-primary-darker focus:border-primary-darker resize-none focus:ring-[1px] focus:ring-primary-darker"
						/>
					</motion.div>
					<motion.div
						initial={initial}
						whileInView={fadeInUp}
						viewport={{once: true}}
						className={
							formik?.touched?.firstName ||
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
							!formik?.values?.firstName ||
							!formik?.values?.lastName ||
							!formik?.values?.email ||
							!formik?.values?.phoneNumber ||
							!formik?.values?.selectedServices ||
							!formik?.values?.subject ||
							!formik?.values?.message ||
							reCaptchaResult === null ||
							reCaptchaResult === undefined
						}
						className="w-full text-white font-semibold tracking-wide disabled:bg-opacity-20 disabled:cursor-not-allowed"
						type="submit"
					>
						<span
							className={
								messageSent ? `${styles.messageSent}` : `${styles.submitButton}`
							}
						>
							<span className="tracking-widest text-white uppercase font-aspektaMain text-sm">
								{loading
									? "Sending Message..."
									: messageSent
									? "Message Sent!"
									: errorMessage
									? "Sending Error!"
									: "Send Message"}
							</span>
						</span>
					</motion.button>
				</motion.div>
			</Form>
		</Formik>
	);
};

export default FormikForm;
