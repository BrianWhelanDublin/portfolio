import { motion } from "framer-motion";
import { letterVarients } from "./text-animation-variants";

const TextAnimation = ({ text }) => {
	return (
		<>
			{[...text].map((letter, index) => (
				<span key={index} className="text-animation">
					<motion.span
						initial="start"
						whileInView="end"
						viewport={{ once: true }}
						variants={letterVarients}
					>
						{letter}
					</motion.span>
				</span>
			))}
		</>
	);
};

export default TextAnimation;
