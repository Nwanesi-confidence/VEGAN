import NavigationBar from "./Navbar/CollapsibleExample";
import CarouselFadeExample from "./Carousel/Carousel"
import Cards from "./Card/Card";
import Testimonial from "./Testimonial/Testimonial";
import Header from "./Header/Header";
import Footer from "./Footer/Footer"
import ProgressBar from 'react-progressbar-on-scroll'
export default function Navigation (){
    return(
        <>
            <ProgressBar
            color="#b3195c"
            gradient={true}
            gradientColor="#e55812"
            height={5}
            />
            <NavigationBar />
            <Header />
            <Cards />
            <CarouselFadeExample />
            <Testimonial />
            <Footer />
        </>
    )
}

