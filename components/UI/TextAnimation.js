import { motion } from "framer-motion";

const TextAnimation = ({ text, variant }) => {
	return (
		<>
			{[...text].map((letter, index) => (
				<span key={index} className="header__title-animation">
					<motion.span variants={variant}>{letter}</motion.span>
				</span>
			))}
		</>
	);
};

export default TextAnimation;
