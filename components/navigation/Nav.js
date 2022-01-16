import Link from "next/link";
import { useState } from "react";
import TextAnimation from "../UI/TextAnimation";

export const NavLink = ({ link, title, onClick }) => {
	return (
		<Link href={link}>
			<a onClick={onClick}>
				<TextAnimation text={title} />
			</a>
		</Link>
	);
};

const NavItems = ({ onClick }) => {
	return (
		<>
			<NavLink link={"/#header"} title={"Home"} onClick={onClick} />
			<NavLink link={"/#about"} title={"About"} onClick={onClick} />
			<NavLink link={"/#projects"} title={"Projects"} onClick={onClick} />
			<NavLink link={"/#skills"} title={"Skills"} onClick={onClick} />
			<NavLink link={"/#contact"} title={"Contact"} onClick={onClick} />
		</>
	);
};

const Nav = () => {
	const [toggleNav, setToggleNav] = useState(false);

	const handleToggleNav = () => setToggleNav(!toggleNav);

	return (
		<nav className="nav__wrapper">
			<button
				className={`${toggleNav ? "active" : ""}`}
				onClick={handleToggleNav}
			>
				<span></span>
				<span></span>
			</button>
			{toggleNav && (
				<div className="nav__items">
					<NavItems onClick={handleToggleNav} />
				</div>
			)}
		</nav>
	);
};

export default Nav;
