// Imports
import Link from "next/link";
import {FC, Fragment} from "react";
import {motion} from "framer-motion";
import {ISubmenuLinks} from "@/types/components";
import {initial, arrayLoopStaggerChildren} from "@/animations/animations";

const SubmenuLinks: FC<ISubmenuLinks> = ({
	sublinksOpen,
	sublinks,
	resetNavbarStyling,
	displayNavBackgroundColor,
}) => {
	return (
		<>
			<ul
				onMouseLeave={resetNavbarStyling}
				onMouseEnter={displayNavBackgroundColor}
				className="fixed mt-[1.40rem] ml-[-100px] w-full max-w-sm flex flex-col border-b-8 border-solid border-primary-three z-[999]"
			>
				{sublinks?.length > 0 ? (
					sublinks?.map((item: any, keys: number) => (
						<Fragment key={keys}>
							<motion.li
								custom={keys}
								initial={initial}
								whileInView="animate"
								viewport={{once: true}}
								variants={arrayLoopStaggerChildren}
								className="bg-lightGreyTwo hover:bg-accent-default"
							>
								<Link
									href={`${item?.node?.url}`}
									className={` ${
										sublinksOpen
											? "w-full text-left text-black hover:text-white"
											: "text-black"
									} block p-4 text-tiny uppercase font-aspektaMain`}
								>
									{item?.node?.label}
								</Link>
							</motion.li>
						</Fragment>
					))
				) : (
					<></>
				)}
			</ul>
		</>
	);
};

export default SubmenuLinks;
