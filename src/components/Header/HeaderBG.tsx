import styles from "./Header.module.css"
import { Typography, Button } from "../components"

import { motion, useViewportScroll, useTransform } from "framer-motion"
import { MdArrowDownward, MdKeyboardArrowRight } from "react-icons/md"

import Link from "next/link"
import { useRouter } from "next/router"

const HeaderBG: React.FC = () => {

    const router = useRouter()

    const { scrollY } = useViewportScroll();
    const y2 = useTransform(scrollY, [0, 1200], ["0vh", "-50vh"]);

    return (
        <motion.header className={styles.main} style={{y: y2}}>
            <section className={styles.headerSection}>
                <Typography type="h1" secondary className={styles.labs} noWrap>UtterLabs</Typography>
                <Typography type="h2" staticColor noWrap>The ultimate tool<br/> to create and share <br/> computer builds!</Typography>
                <motion.div className={styles.createBuild} onClick={() => router.push("/builder")}>
                    <Typography type="h4">Create your first build</Typography>
                    <MdKeyboardArrowRight />
                </motion.div>
            </section>
            <div className={styles.arrow}>
                <a href="#main"><MdArrowDownward /></a>
            </div>
        </motion.header>
    )
}

export default HeaderBG