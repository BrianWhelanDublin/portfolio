import { motion } from "framer-motion";
import { titleVariants, subtitleVariants } from "./header-variants";



const Header = ({content}) =>{
    const {title, subtitle} = content;
    return(
        <header className="header__wrapper">
           {/* <motion.div
           variants={titleVariants}
           initial="start"
           animate="end"
           >  */}
           <motion.h1
            className="header__title"
            variants={titleVariants}
            initial="start"
            animate="end"
            >{title}</motion.h1>
            <motion.p 
            className="header__subtitle"
            variants={subtitleVariants}
            initial="start"
            animate="end"
            >{subtitle}</motion.p>
        </header>
    )
}

export default Header;