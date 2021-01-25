import { PageContainer, Typography } from "../../components/components"
import Link from "next/link"

const Builds: React.FC = () => {
    return(
        <PageContainer>
            <Typography type="h1">Builds!</Typography>
            <Link href="/">Go back</Link>
        </PageContainer>
    )
}

export default Builds