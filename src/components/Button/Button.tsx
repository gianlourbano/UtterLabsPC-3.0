import { usePalette, useTheme } from "../Theme/ThemeProvider"
import { motion } from "framer-motion"
import styles from "./Button.module.css"
import { CSSProperties } from "react"

import Typography, { comp } from "../Typography/Typography"
import { useRouter } from "next/router"

interface ButtonProps {
	type?: comp
	onClick?: () => void
	goto?: string
}

const Button: React.FC<ButtonProps> = ({onClick, goto, type, children}) => {
	const {color, background} = usePalette()
	const theme = useTheme()
	const router = useRouter()
	
	const customStyle: CSSProperties = {
		backgroundColor: background[theme].primary,
		color: color[theme].primary.main,
		transition: "0.2s",
	}

	return(
		<motion.button 
			style={customStyle} 
			className={styles.container}
			onClick={goto ? () => router.push(`/${goto}`) : onClick}
			
		>
			<Typography type={type}>{children}</Typography>
		</motion.button>
	)
}

export default Button