import { useEffect, useState } from "react"
import styles from "./Header.module.css"
import Typography from "../Typography/Typography"
import HeaderBG from "./HeaderBG"

import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"

import {motion} from "framer-motion"

const links = ["Home", "Builds", "Shop", "Account"]

import Link from "next/link"

const Header: React.FC = () => {

	useEffect(() => {
		const setScroll = () => {
			var string = (window.pageYOffset / 325).toString()
			document.body.style.setProperty('--scroll', string)
		}
		
		window.addEventListener('scroll', setScroll, false)

		return () => {
			window.removeEventListener("scrolL", setScroll, false)
		}
	  })
	
	const _Link: React.FC<{index: number, link: string}> = ({index, link }) => {

		return(
			<>
				<motion.h2 
					className={styles.link}
					key={index}
					whileHover={{
						scale: 1.2,
						transition: { duration: 0.1 },
					}}
				>
					{link}
				</motion.h2>
				
			</>
		)
	}

	return(
		<>
            <div className={styles.links}>
            	{links.map((link: string, index) => {
					return(
						<_Link link={link} index={index} />
					)
				})}
            </div>
			<div className={styles.themeSwitch}><ThemeSwitcher /></div>
			<HeaderBG />
		</>
	)
}

export default Header