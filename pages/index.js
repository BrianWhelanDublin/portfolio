import client from "../lib/apolloClient";
import { HOMEPAGE_QUERY } from "../lib/queries/homepage";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import Layout from "../components/Layout/layout";
import About from "../components/AboutSection/About";

export default function Home({ header, about }) {
	console.log(about);
	return (
		<Layout>
			<HomeHeader content={header} />
			<About content={about} />
		</Layout>
	);
}

export const getStaticProps = async () => {
	const { data } = await client.query({
		query: HOMEPAGE_QUERY,
	});
	return {
		props: {
			header: data.PageItem.content.body[0],
			about: data.PageItem.content.body[1],
		},
	};
};
