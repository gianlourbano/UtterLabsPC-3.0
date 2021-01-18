import Card from "../../Card/Card"
import { usePalette, useTheme } from "../../../src/ThemeProvider"
import Typography from "../../Typography/Typography"
import styles from "./News.module.css"

const NewsCard: React.FC  = () => {
    const { color } = usePalette()
    const theme = useTheme()

    return(
        <Card style={
            {
                flexGrow: 3,
                height: "45vh",
            }
        } img={{ src: "./mainboard.jpg", alt: "" }} color={["primary", "shade"]} className={styles.news}>
            <div className={styles.innerText}>
                <Typography type="h2">Hello Pex</Typography>
                <Typography type="h4">Hello Pex</Typography>
                <Typography type="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat posuere velit, ut iaculis augue sodales sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas ultricies nec sapien non convallis [...] </Typography>
            </div>
        </Card>
    )
}

export default NewsCard