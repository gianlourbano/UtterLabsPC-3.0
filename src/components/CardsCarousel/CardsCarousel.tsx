import { Card } from "../components"
import styles from "./CardsCarousel.module.css"

interface CardsCarouselProps {
	items?: typeof mockdata,
}

const mockdata = [
	{
		name: "Entry level build",
		cpu: "Ryzen 5 3600X",
		gpu: "RTX 3070",
		img: "https://images-na.ssl-images-amazon.com/images/I/61mX0OPQguL._AC_SL1500_.jpg"
	}, {
		name: "Entry level build",
		cpu: "Ryzen 5 3600X",
		gpu: "RTX 3070",
		img: "https://images-na.ssl-images-amazon.com/images/I/71ckp2VMztL._AC_SL1200_.jpg"
	}, {
		name: "Entry level build",
		cpu: "Ryzen 5 3600X",
		gpu: "RTX 3070",
		img: "https://images-na.ssl-images-amazon.com/images/I/71KYDW2FJJL._AC_SL1500_.jpg"
	}, {
		name: "Entry level build",
		cpu: "Ryzen 5 3600X",
		gpu: "RTX 3070",
		img: "https://images-na.ssl-images-amazon.com/images/I/61mX0OPQguL._AC_SL1500_.jpg"
	}, {
		name: "Entry level build",
		cpu: "Ryzen 5 3600X",
		gpu: "RTX 3070",
		img: "https://images-na.ssl-images-amazon.com/images/I/71ckp2VMztL._AC_SL1200_.jpg"
	}, {
		name: "Entry level build",
		cpu: "Ryzen 5 3600X",
		gpu: "RTX 3070",
		img: "https://images-na.ssl-images-amazon.com/images/I/71KYDW2FJJL._AC_SL1500_.jpg"
	}, 
]

const CardsCarousel: React.FC<CardsCarouselProps> = ({items = mockdata}) => {
	return(
	  <section className={styles.container}>
		  {items.map((item, index) => {
			  return(
				  <Card img={{src: item.img, alt: ""}} content={{text: item.cpu, text2: item.gpu, button: item.name}} key={index}/>
			  )
		  })}
	  </section>
	)
}

export default CardsCarousel