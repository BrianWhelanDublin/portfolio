import Layout from "../components/Layout";
import Nav from "../components/navigation/Nav";

import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Nav />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
