import client from "../lib/apolloClient";
import { HOMEPAGE_QUERY } from "../lib/queries/homepage";
import { PROJECTS_QUERY } from "../lib/queries/projects";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import Layout from "../components/Layout/layout";
import About from "../components/AboutSection/About";
import ProjectSection from "../components/ProjectsSection/ProjectSection";
import Skills from "../components/SkillsSection/Skills";

export default function Home({ header, about, skills, projects }) {
	console.log(skills);
	return (
		<Layout>
			<HomeHeader content={header} />
			<About content={about} />
			<ProjectSection projects={projects} />
			<Skills skills={skills} />
		</Layout>
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
		},
	};
};
