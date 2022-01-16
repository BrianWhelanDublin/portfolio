import Head from "next/head";

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Brian Whelan Web Developer</title>
				<meta name="description" content="Web portfolio for brian whelan" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header></header>
			<main>{children}</main>
			<footer></footer>
		</div>
	);
};

export default Layout;
