import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { projectImageVariants } from "./projectcard-variants";
import Link from "next/link";

const ProjectCard = ({ project }) => {
	const { slug, content } = project;

	return (
		<div>
			<Link href="[slug]" as={`/${slug}`}>
				<a className="projects__project">
					<div>
						<h3>{content.title}</h3>
						<p>{content.description}</p>
					</div>

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
				</a>
			</Link>
		</div>
	);
};

export default ProjectCard;
