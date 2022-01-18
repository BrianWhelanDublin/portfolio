import { BsArrowUpRight } from "react-icons/bs";
import { render } from "storyblok-rich-text-react-renderer";

const ProjectAbout = ({ about, github, liveSite }) => {
	return (
		<section className="project-about__wrapper">
			<div className="project-about__links">
				<a href={liveSite} target={"_blank"} rel={"noreferrer"}>
					Live Site
					<span>
						<BsArrowUpRight />
					</span>
				</a>
				<a href={github} target={"_blank"} rel={"noreferrer"}>
					Github
					<span>
						<BsArrowUpRight />
					</span>
				</a>
			</div>
			<div className="project-about__text">{render(about)}</div>
		</section>
	);
};

export default ProjectAbout;
