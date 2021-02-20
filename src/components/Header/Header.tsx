import { useEffect, useState } from "react"

import {motion, useTransform, useViewportScroll, AnimatePresence} from "framer-motion"
import { Typography, Button, Box, ThemeSwitcher, Divider } from "../components"
import {MdAccountCircle, MdHelp} from "react-icons/md"

import { signIn, signOut, useSession } from 'next-auth/client'
import { NextRouter, useRouter } from "next/router"
import Link from "next/link"

import styles from "./Header.module.css"

const Switch: React.FC = () => {
	return(
		<div style={{display: "flex", gap: 10, alignItems: "center"}}>
			<Typography type="h4" staticColor noWrap>Change theme!</Typography><ThemeSwitcher />
		</div>
	)
}

const variants = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
}

const AccountButton: React.FC<{session: any, router: NextRouter}> = ({session, router}) => {
	
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(!open)

	const handleRouteChange = (url, { shallow }) => {
		setOpen(false)
	}

	useEffect(() => {
		router.events.on('routeChangeStart', handleRouteChange)

		return () => {
			router.events.off('routeChangeStart', handleRouteChange)
		}
	}, [])
	
	return(
		<div className={styles.accountButton}>
			<motion.h3 className={styles.link}
				onClick={handleOpen}
				whileHover={{scale: 1.04}}
			>
				{session ? <img src={session.user.image} alt="" width={40} height={40} style={{borderRadius: "50%"}}/> : <MdAccountCircle />}
			</motion.h3>
			<AnimatePresence exitBeforeEnter>
				{open && <motion.div
					className={styles.accountMenu}
					variants={variants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					{session ? 
					<Box colortype={["secondary", "main"]}>
						<div className={styles.profile}>
							<img src={session?.user.image} alt="" width={60} height={60} className={styles.profileImg}/>
							<Typography staticColor type="h4" noWrap>{session?.user.name}</Typography>
						</div>
						<Divider />
						<Button goto="account">Profile Page</Button>
						<Button onClick={() => {
							signOut()
						}}>Sign Out</Button>
						<Switch />
					</Box>
					:
					<Box colortype={["secondary", "main"]}>
						<Typography type="h4" noWrap>Welcome, User!</Typography>
						<Divider />
						<Typography type="p" noWrap>Register for free<br />or create an account</Typography>
						<Button onClick={() => signIn()}>Sign In</Button>
						<Divider />
						<Switch />
					</Box>
					}
				</motion.div>}
			</AnimatePresence>
		</div>
	)
}

const Header: React.FC = ({ children }) => {

	const [ session, loading ] = useSession()
	const router = useRouter()
	
	const { scrollY } = useViewportScroll()
	const color = useTransform(scrollY, [0, 75, 200], ["rgba(49, 53, 58, 0)", "rgba(49, 53, 58, 0)", "rgba(49, 53, 58, 1)"])

	return(
		<motion.div style={{overflow: "hidden"}} >
            <motion.div className={styles.links} style={{background: color}}>
				<Link href="/"><motion.img src="/logo.png" width={60} height={60} style={{cursor: "pointer"}} whileHover={{scale: 1.05}}/></Link>
				<div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
					<Typography type="h3" anim><Link href="/builds">Builds</Link></Typography>
					<Typography type="h3" anim><Link href="/blog">Blog</Link></Typography>
					<Typography type="h3" anim><Link href="/builder">Builder</Link></Typography>
				</div>
				<div style={{display: "flex", justifyContent: "flex-end",gap: 10, alignItems: "center"}}>
					<AccountButton session={session} router={router}/>
					<motion.h3 
						className={styles.link} 
						whileHover={{scale: 1.04}}
						onClick={() => router.push("/about")}
					><MdHelp /></motion.h3>
				</div>
            </motion.div>
			
			{children}
		</motion.div>
	)
}

export default Header