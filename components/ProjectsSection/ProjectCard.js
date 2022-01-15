import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { projectImageVariants } from "./projectcard-variants";

const ProjectCard = ({ project }) => {
	const { content } = project;
	const [showImage, setShowImage] = useState(false);

	const handleMouseEnter = () => setShowImage(true);
	const handleMouseLeave = () => setShowImage(false);

	return (
		<div
			className="projects__project"
			onMouseOver={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div>
				<h3>{content.title}</h3>
				<p>{content.description}</p>
			</div>
			{showImage && (
				<motion.div
					variants={projectImageVariants}
					initial="start"
					animate="end"
					className={`projects__project-image-wrapper`}
				>
					<Image
						src={`/images/${content.mainImageName}`}
						alt=""
						layout="fill"
						objectFit="cover"
						loading="eager"
						quality="100"
						className="projects__project-image"
					/>
				</motion.div>
			)}
		</div>
	);
};

export default ProjectCard;
