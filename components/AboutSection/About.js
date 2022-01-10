import { render } from "storyblok-rich-text-react-renderer";

const About = ({ content }) => {
	return <section>{render(content.aboutText)}</section>;
};

export default About;
