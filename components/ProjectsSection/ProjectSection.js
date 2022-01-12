import ProjectCard from "./ProjectCard";

const ProjectSection = ({ projects }) => {
	return (
		<section className="projects">
			<div className="projects__wrapper">
				{projects.map((project) => (
					<ProjectCard project={project} key={project.id} />
				))}
			</div>
		</section>
	);
};

export default ProjectSection;
