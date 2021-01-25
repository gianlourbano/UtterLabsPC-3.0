import { usePalette, useTheme } from "../Theme/ThemeProvider"
import { motion, Spring } from "framer-motion"
import styles from "./Button.module.css"
import { CSSProperties } from "react"

import Typography, { comp } from "../Typography/Typography"

interface ButtonProps {
	type?: comp
}

const Button: React.FC<ButtonProps> = ({type, children}) => {
	const {color, background} = usePalette()
	const theme = useTheme()
	
	const customStyle: CSSProperties = {
		backgroundColor: background[theme].primary,
		color: color[theme].primary.main,
		transition: "0.2s",
	}

	return(
		<motion.button 
			style={customStyle} 
			className={styles.container}
			whileHover={{
				scale: 1.15,
				transition: { duration: 0.1 },
			  }}
			  whileTap={{ scale: 1.05 }}
		>
			<Typography type={type}>{children}</Typography>
		</motion.button>
	)
}

export default Button