import { motion } from "framer-motion";
import { letterVarients } from "./text-animation-variants";

const TextAnimation = ({ text }) => {
	return (
		<>
			{[...text].map((letter, index) => (
				<motion.span
					initial="start"
					whileInView="end"
					viewport={{ once: true }}
					key={index}
					className="text-animation"
				>
					<motion.span variants={letterVarients}>{letter}</motion.span>
				</motion.span>
			))}
		</>
	);
};

export default TextAnimation;
