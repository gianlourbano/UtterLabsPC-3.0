import styles from "./Header.module.css"
import { Typography, Button } from "../components"
import React, { useEffect, useState } from "react"
import { usePalette, useTheme } from "../Theme/ThemeProvider"

import { motion, useViewportScroll, useTransform } from "framer-motion"

const HeaderBG: React.FC = () => {

    const { scrollY } = useViewportScroll();
    const y2 = useTransform(scrollY, [0, 1200], ["0vh", "-50vh"]);

    return (
        <motion.header className={styles.main} style={{y: y2}}>
            <section className={styles.headerSection}>
                <Typography type="h1" staticColor className={styles.labs}>Welcome to UtterLabs!</Typography>
                <div className={styles.description}>
                    <Typography type="h4" staticColor style={{marginBottom: "1rem"}}>The ultimate tool to create and share computer builds!</Typography>
                    <Button type="h3">Create build!</Button>
                </div>
            </section>
        </motion.header>
    )
}


export default HeaderBG