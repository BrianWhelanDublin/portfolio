import { render } from "storyblok-rich-text-react-renderer";
import TextAnimation from "../UI/TextAnimation";
import { motion } from "framer-motion";
import { skillsVariants } from "./skills-variants";

const Skills = ({ skills }) => {
	return (
		<section id="skills" className="skills__wrapper">
			<div className="skills__title">
				<h3>
					<TextAnimation text={"SKILLS"} />
				</h3>
			</div>
			<motion.div
				initial="start"
				whileInView="end"
				viewport={{ once: true }}
				variants={skillsVariants}
				className="skills__list"
			>
				{render(skills.skills)}
			</motion.div>
		</section>
	);
};

export default Skills;
