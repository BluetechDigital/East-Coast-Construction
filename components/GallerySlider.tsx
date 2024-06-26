// Imports
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {IGallerySlider} from "@/types/components/index";
import {fadeIn, initialTwo} from "@/animations/animations";

// Swiper.js Slider
import "swiper/css";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";

// Styling
import styles from "@/styles/components/GallerySlider.module.scss";

// Components
import Paragraph from "@/components/Elements/Paragraph";

const GallerySlider: FC<IGallerySlider> = ({gallerySlider}) => {
	return (
		<>
			<div
				className={
					styles.gallerySlider +
					" relative z-10 flex flex-col h-fit gallerySlider"
				}
			>
				{/* q8ZuN94DSzAv*5lTOnFxx4WX */}
				<div className="lg:relative flex flex-col lg:flex-row">
					<div className="relative overflow-hidden">
						<Swiper
							loop={true}
							navigation={true}
							spaceBetween={30}
							centeredSlides={true}
							modules={[Autoplay, Navigation]}
							autoplay={{
								delay: 5000,
								disableOnInteraction: false,
							}}
						>
							{gallerySlider?.length > 0 ? (
								gallerySlider?.map((item: any, keys: number) => (
									<Fragment key={keys}>
										<SwiperSlide>
											<div className="w-full p-0">
												<div
													className="pt-24 pb-20 w-full h-[45vh] flex flex-col items-center justify-center relative bg-center bg-no-repeat bg-cover"
													style={{
														backgroundImage: `linear-gradient(
																0deg,
																rgb(0, 0, 0, 0.40),
																rgba(0, 0, 0, 0.40),
																rgba(0, 0, 0, 0.40)
															),url("${item?.backgroundImage?.sourceUrl}")`,
													}}
												>
													<div className="max-w-4xl mx-auto lg:mx-0 relative z-10 flex flex-col items-center px-8 sm:px-24">
														<motion.h3
															initial={initialTwo}
															whileInView={fadeIn}
															viewport={{once: true}}
															className="leading-tight text-center uppercase font-aspektaMain text-lg md:text-xl lg:text-3xl xl:text-5xl tracking-[0.10rem] text-white font-semibold xl:leading-[2.5rem]"
														>
															{item?.title}
														</motion.h3>
														<Paragraph
															content={item?.paragraph}
															tailwindStyling="py-2 text-white leading-relaxed text-paragraph text-center"
														/>
														<Link
															href={`${item?.buttonLink?.url}`}
															target={item?.buttonLink?.target}
															className={`${
																item?.buttonLink?.url ? "block" : "hidden"
															}`}
														>
															<div className="mt-4 lg:mt-2 w-fit mx-auto lg:mx-0 py-4 px-10 cursor-pointer bg-accent-default hover:bg-accent-two transition-all ease-in-out duration-500 tracking-[0.10rem] text-white text-tiny md:text-base text-center uppercase font-aspektaMain">
																{item?.buttonLink?.title}
															</div>
														</Link>
													</div>
												</div>
											</div>
										</SwiperSlide>
									</Fragment>
								))
							) : (
								<></>
							)}
						</Swiper>
					</div>
				</div>
			</div>
		</>
	);
};

export default GallerySlider;
