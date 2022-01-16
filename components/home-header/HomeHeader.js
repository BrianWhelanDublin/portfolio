import { motion } from "framer-motion";
import { descriptionVariants } from "./home-header-variants";
import TextAnimation from "../UI/TextAnimation";

const HomeHeader = ({ content }) => {
	const { title, subtitle, description } = content;
	return (
		<motion.section
			id="header"
			initial="start"
			animate="end"
			className="header__wrapper"
		>
			<div className="header__title-wrapper">
				<h1 className="header__title">
					<TextAnimation text={title} />
				</h1>
			</div>
			<div className="header__description-wrapper">
				<motion.p
					className="header__description"
					variants={descriptionVariants}
				>
					{description}
				</motion.p>
			</div>
			<div className="header__subtitle-wrapper">
				<p className="header__subtitle">
					<TextAnimation text={subtitle} />
				</p>
			</div>
		</motion.section>
	);
};

export default HomeHeader;
