import { render } from "storyblok-rich-text-react-renderer";
import { motion } from "framer-motion";
import { aboutSectionVariants, aboutTextVariants } from "./about-vairants";

const About = ({ content }) => {
	return (
		<section className="about__wrapper">
			<motion.div
				initial="start"
				whileInView="end"
				viewport={{ once: true }}
				variants={aboutTextVariants}
				className="about__content"
			>
				{render(content.aboutText)}
			</motion.div>
		</section>
	);
};

export default About;
