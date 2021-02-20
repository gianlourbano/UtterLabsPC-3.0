import { Container, PageContainer, Typography } from "../components/components"
import styles from "../../styles/Builder.module.css"

import { motion } from "framer-motion"
import { useReducer, useState } from "react"
import { createStrictContext } from "../../Useful stuff/StrictContext"

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

const RamStick: React.FC = () => {
    return(
        <motion.div variants={item}>
            <img src="./ram.png" alt="" className={styles.ramstick}/>
        </motion.div>
    )
}

const Motherboard: React.FC = () => {
    return(
        <div className={styles.motherboard}>
            <img src="./bp.png" alt="" className={styles.mb} />
            <section className={styles.selectors}>
                <div className={`${styles.item} ${styles.cpu}`}></div>
                <div className={`${styles.item} ${styles.ram}`}>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate={'visible'}
                        className={styles.ramsticks}
                    >
                        <RamStick />
                        <RamStick />
                        <RamStick />
                        <RamStick />
                    </motion.div>
                </div>
                <div className={`${styles.item} ${styles.gpu}`}></div>
            </section>
        </div>
    )
}

interface PartCardProps {
    name: string,
    img: string,
    desc: string,
    price: string
}

const data = [
    {
        name: "",
        img: "",
        desc: "",
        price: "",
    }, {
        name: "",
        img: "",
        desc: "",
        price: "",
    }, {
        name: "",
        img: "",
        desc: "",
        price: "",
    },
]

const PartCard: React.FC<PartCardProps> = ({name, img, desc, price}) => {
    return(
        <div className={styles.card}>
            <img src={img} alt="" />
            <Typography type="h2">{name}</Typography>
            <Typography type="p">{desc}</Typography>
            <Typography type="h3">{price}</Typography>
        </div>
    )
}

export type Part = "cpu" | "gpu" | "ram" | "mobo" | "case" | "storage" | "cooling" | "extra" | null

const [PartProvider, usePart] = createStrictContext<Part | undefined>(undefined)
const [PartDispatcher, usePartDispatcher] = createStrictContext(undefined)

const Builder: React.FC = () => {
    const [state, setState] = useState<Part>(null)
    
    return(
        <PageContainer noPadding>
                    <Container style={{ width: "50vw" }} center>
                        <Motherboard />
                    </Container>
                    <Container style={{ width: "50vw" }} className={styles.buttons}>
                        <main>
                            <header></header>
                        </main>
                    </Container>
        </PageContainer>
    )
}

export default Builder