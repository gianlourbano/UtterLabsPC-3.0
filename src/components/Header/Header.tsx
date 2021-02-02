import styles from "./Header.module.css"

import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"

import {motion, useTransform, useViewportScroll} from "framer-motion"

const links = [ "Home", "Builds", "Builder", "Account"]
const hrefs = [ "/", "/builds", "/builder", "/account"]

import Link from "next/link"

const _Link: React.FC<{ href: string, link: string }> = ({ href, link }) => {

	return (
		<Link href={`${href.toLowerCase()}`}>
			<motion.h3
				className={styles.link}
				whileHover={{
					scale: 1.2,
					transition: { duration: 0.1 },
				}}
			>
				{link}
			</motion.h3>
		</Link>
	)
}

const Header: React.FC = ({ children }) => {
	
	const { scrollY } = useViewportScroll()
	const color = useTransform(scrollY, [0, 75, 200], ["rgba(19, 69, 85, 0)", "rgba(19, 69, 85, 0)", "rgba(19, 69, 85, 1)"])

	return(
		<motion.div 
			style={{overflow: "hidden"}}
		>
            <motion.div className={styles.links} style={{background: color}}>
            	{links.map((link: string, index) => {
					return(
						<_Link link={link} href={hrefs[index]} key={index}/>
					)
				})}
            </motion.div>
			<div className={styles.themeSwitch}><ThemeSwitcher /></div>
			{children}
		</motion.div>
	)
}

export default Header