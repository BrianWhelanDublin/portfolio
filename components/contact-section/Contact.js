import { BsArrowUpRight } from "react-icons/bs";
import TextAnimation from "../UI/TextAnimation";
import { motion } from "framer-motion";
import { linkVariants } from "./contact-variants";

export const ContactLink = ({ url, title }) => {
	return (
		<motion.div
			id="contact"
			initial="start"
			whileInView="end"
			viewport={{ once: true }}
			variants={linkVariants}
			className="contact__link"
		>
			<a href={url} target={"_blank"} rel={"noreferrer"}>
				{title}
				<BsArrowUpRight />
			</a>
		</motion.div>
	);
};

const Contact = ({ content }) => {
	const { email, github, linkedin } = content;

	const emailHref = `mailto:${email}`;

	return (
		<section className="contact__wrapper">
			<div className="contact__title">
				<h3>
					<TextAnimation text={"Contact"} />
				</h3>
			</div>
			<div>
				<ContactLink url={emailHref} title={"Email"} />
				<ContactLink url={github} title={"Github"} />
				<ContactLink url={linkedin} title={"LinkedIn"} />
			</div>
		</section>
	);
};

export default Contact;
