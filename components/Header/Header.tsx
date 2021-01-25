import { useEffect, useState } from "react"
import styles from "./Header.module.css"
import Typography from "../Typography/Typography"
import HeaderBG from "./HeaderBG"

import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"

import {motion, useViewportScroll, useTransform} from "framer-motion"

const links = [ "Home", "Builds", "Shop", "Account"]
const hrefs = [ "/", "/builds", "/shop", "/account"]

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
	
	return(
		<motion.div style={{overflow: "hidden"}}>
            <div className={styles.links}>
            	{links.map((link: string, index) => {
					return(
						<_Link link={link} href={hrefs[index]} key={index}/>
					)
				})}
            </div>
			<div className={styles.themeSwitch}><ThemeSwitcher /></div>
			{children}
		</motion.div>
	)
}

export default Header