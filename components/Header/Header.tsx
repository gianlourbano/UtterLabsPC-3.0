import { useEffect } from "react"
import ScrollAnimation from "react-animate-on-scroll"
import styles from "./Header.module.css"
import Typography from "../Typography/Typography"
import HeaderBG from "./HeaderBG"

const Header: React.FC = () => {

	useEffect(() => {
		window.addEventListener('scroll', () => {
		  var string = (window.pageYOffset / 325).toString()
		  document.body.style.setProperty('--scroll', string)
		}, false)
	  })

	return(
		<>
            	<div className={styles.links}>
            	    <Typography anim staticColor type="h2">Builds</Typography>
            	    <Typography anim staticColor type="h2">Shop</Typography>
            	    <Typography anim staticColor type="h2">Account</Typography>
            	</div>
			<HeaderBG />
		</>
	)
}

export default Header