import client from "../lib/apolloClient";
import { HOMEPAGE_QUERY } from "../lib/queries/homepage";
import { PROJECTS_QUERY } from "../lib/queries/projects";
import HomeHeader from "../components/home-header/HomeHeader";

import About from "../components/about-section/About";
import ProjectSection from "../components/projects-section/ProjectSection";
import Skills from "../components/skills-section/Skills";
import Contact from "../components/contact-section/Contact";

export default function Home({ header, about, skills, projects, contact }) {
	console.log(projects);
	return (
		<>
			<HomeHeader content={header} />
			<About content={about} />
			<ProjectSection projects={projects} />
			<Skills skills={skills} />
			<Contact content={contact} />
		</>
	);
}

export const getStaticProps = async () => {
	const { data: homepageData } = await client.query({
		query: HOMEPAGE_QUERY,
	});

	const { data: projectsData } = await client.query({
		query: PROJECTS_QUERY,
	});

	return {
		props: {
			data: homepageData,
			header: homepageData.PageItem.content.body[0],
			about: homepageData.PageItem.content.body[1],
			skills: homepageData.PageItem.content.body[2],
			projects: projectsData.ProjectItems.items,
			contact: homepageData.PageItem.content.body[3],
		},
	};
};
