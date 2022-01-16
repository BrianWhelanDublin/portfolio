import ProjectCard from "./ProjectCard";

const ProjectSection = ({ projects }) => {
	return (
		<section id="projects" className="projects">
			<div className="projects__wrapper">
				{projects.map((project) => (
					<ProjectCard project={project} key={project.id} />
				))}
			</div>
		</section>
	);
};

export default ProjectSection;
