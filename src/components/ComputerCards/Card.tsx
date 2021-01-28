import { usePalette, useTheme } from "../Theme/ThemeProvider"
import Typography from "../Typography/Typography"
import styles from "./Card.module.css"

const Card: React.FC = () => {
    const {color, background} = usePalette()
    const theme = useTheme()
    
    return(
        <article className={styles.card} style={{ background: `${background[theme].primary}`, boxShadow: `-2rem 0 3rem -2rem ${background[theme].shadow}, 0 2rem 3rem -2rem ${background[theme].shadow} `}}>
            <header className={styles.cardHeader}>
                <Typography type="h4">Build</Typography><Typography type="p" className={styles.date}>May 25th 2020</Typography>
            </header>
            <main>
                <img src="./corsair.jpg" alt="" className={styles.img} />
                <Typography type="h3" className={styles.title}>CSS tricks!</Typography>
            </main>
        </article>
    )
}

export default Card