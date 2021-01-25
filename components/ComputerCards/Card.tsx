import { usePalette, useTheme } from "../../src/ThemeProvider"
import Typography from "../Typography/Typography"
import styles from "./Card.module.css"

const Card: React.FC = () => {
    const {color, background} = usePalette()
    const theme = useTheme()
    
    return(
        <article className={styles.card} style={{ background: `${background[theme].primary}`, boxShadow: `-2rem 0 3rem -2rem ${background[theme].shadow}`}}>
            <header className={styles.cardHeader}>
                <Typography type="p">May 25th 2020</Typography>
                <Typography type="h2">CSS tricks!</Typography>
            </header>
        </article>
    )
}

export default Card