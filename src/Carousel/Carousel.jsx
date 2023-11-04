import "./Carousel.css";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export default function CarouselFadeExample() {
  return (
    <section className="enclosures" id="mealdisplay">
    <span className="our-meal">OUR MEALS</span>
      <Carousel className="carousel-containers" fade>
          <Carousel.Item>
            <Carousel.Caption class>
              <span><h3 className="listing">CHICKEN</h3></span>
              <div className="carousel-first-row">

                <div className="contains">
                  <img className='carousel-image-resizer' variant="top" src="./media/photos/chicken1.jpg" />
                </div>

                <div className="contains">
                  <img className='carousel-image-resizer' variant="top" src="./media/photos/chicken2.jpg" />
                </div>

                <div className="contains">
                  <img className='carousel-image-resizer' variant="top" src="./media/photos/chicken4.jpg" />
                </div>
                
              </div>
              <p className="outline">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption class>
              <span><h3 className="listing">PIZZA</h3></span>
              <div className="carousel-first-row">

                <div className="contains">
                  <img className='carousel-image-resizer' variant="top" src="./media/photos/pizza1.jpg" />
                </div>

                <div className="contains">
                  <img className='carousel-image-resizer' variant="top" src="./media/photos/pizza5.jpg" />
                </div>

                <div className="contains">
                  <img className='carousel-image-resizer' variant="top" src="./media/photos/pizza4.jpg" />
                </div>
                
              </div>
              <p className="outline">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption class>
              <span><h3 className="listing">HAMBURGER</h3></span>
              <div className="carousel-first-row">

                <div className="contains">
                  <img className='carousel-image-resizer' variant="top" src="./media/photos/hamburger1.jpg" />
                </div>

                <div className="contains">
                  <img className='carousel-image-resizer' variant="top" src="./media/photos/hamburger2.jpg" />
                </div>

                <div className="contains">
                  <img className='carousel-image-resizer' variant="top" src="./media/photos/hamburger4.jpg" />
                </div>
                
              </div>
              <p className="outline">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              
            </Carousel.Caption>
          </Carousel.Item>

         
    
      </Carousel>
    </section>
);
    
}


