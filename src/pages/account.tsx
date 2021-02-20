import { getSession, useSession } from "next-auth/client"
import { Box, PageContainer, Typography } from "../components/components"

import { GetServerSideProps } from "next"

import styles from "../../styles/AccountPage.module.css"

interface User {
    name?: string | null;
    email?: string | null;
    image?: string | null;
}

const AccountPage: React.FC<{user: User}> = ({user}) => {
	
	return(
		<PageContainer style={{flexDirection: "column", gap: "1rem"}}>
			<Box colortype={["secondary", "shade"]} className={styles.userData}>
				<img src={user?.image} alt="userImage"/>
				<div>
					<Typography type="h2" staticColor>{user?.name}</Typography>
					<Typography type="h4" staticColor>{user?.email}</Typography>
				</div>
			</Box>
			<main className={styles.content}>
				<section className={styles.favourites}>
					<Box colortype={["tertiary", "main"]}>
						<Typography type="h2">Favourites</Typography>
					</Box>
				</section>
			</main>
		</PageContainer>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context)
	if (!session) {
		context.res.writeHead(302, { Location: "/" })
		context.res.end()
	}

	return {
		props: {
			user: session.user,
		}
	}
}

export default AccountPage