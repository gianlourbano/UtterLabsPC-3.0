import { PageContainer, Typography, Carousel, Slide } from "../../components/components"
import Link from "next/link"

import {data} from "../../components/Carousel/mockdata"

const Builds: React.FC = () => {
    return(
        <PageContainer>
            <Carousel>
                {data.map((slide, index) => {
                    return (
                        <Slide title={slide.title} subtitle={slide.subtitle} text={slide.text} img={{ src: slide.image, alt: "" }} key={index} />
                    )
                })}
            </Carousel>
        </PageContainer>
    )
}

export default Builds