import { usePalette, useTheme } from "../Theme/ThemeProvider"

const Divider: React.FC = () => {
	const {background} = usePalette()
	const theme = useTheme()
	
	return(
		<hr style={{backgroundColor: background[theme].secondary, margin: "0 5px"}}/>
	)
}

export default Divider