import client from "../lib/apolloClient";
import { useRouter } from "next/router";
import { PROJECT_SLUGS, PROJECT_BY_ID } from "../lib/queries/projects";

const PrjectPage = ({ data }) => {
	console.log(data);
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}
	return <h1>Project</h1>;
};

export default PrjectPage;

export const getStaticProps = async ({ params }) => {
	const { data } = await client.query({
		query: PROJECT_BY_ID,
		variables: {
			slug: params.slug,
		},
	});

	return {
		props: {
			data,
		},
	};
};

export const getStaticPaths = async () => {
	const { data } = await client.query({
		query: PROJECT_SLUGS,
	});
	const paths = [];
	data.ProjectItems.items.map((project) => {
		paths.push({ params: { slug: project.slug } });
	});

	return {
		paths,
		fallback: true,
	};
};
