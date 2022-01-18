import Image from "next/image";
import Link from "next/link";
import TextAnimation from "../UI/TextAnimation";
import { BsArrowUpLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import { projectHeaderVariants } from "./project-header-variants";

const ProjectHeader = ({ title, image }) => {
	return (
		<section className="projectpage__header">
			<h1>
				<TextAnimation text={title} />
			</h1>
			<motion.div
				initial="start"
				animate="end"
				variants={projectHeaderVariants}
				className="projectpage__image"
			>
				<Image
					src={`/images/${image}`}
					alt=""
					layout="fill"
					objectFit="cover"
					loading="eager"
					quality="100"
					className="projects__project-image"
				/>
			</motion.div>
		</section>
	);
};

export default ProjectHeader;
