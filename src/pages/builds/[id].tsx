import {useRouter} from "next/router"
import { ComputerCard, PageContainer } from "../../components/components"

const Build: React.FC = () => {
	const router = useRouter()
	const {id} = router.query

	return(
		<PageContainer>
			<ComputerCard />
		</PageContainer>
	)
}

export default Build