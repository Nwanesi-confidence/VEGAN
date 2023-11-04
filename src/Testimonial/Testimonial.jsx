import "./Testimonial.css";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import WhatCustomers from "../illustrations/WhatCustomer.svg"
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export default function Testimonial() {
  return (
    <section className="testimonial-enclosure" id="testimonial">
        <div className="house">
            <Carousel className="containing" fade>
            <Carousel.Item>
            <span><h6 className="testimonial-heading">TESTIMONIALS</h6></span>
                    <Carousel.Caption class>
                    <span className=""><h3>What our customers are saying</h3></span>
                    <div className="testimonial-first-rows">
                        
                        <span id="lorem">
                        Lorem ipsum dolor sit amet, consectetur adip inc  commodo con laoreet inter lorem.
                        lorem ipsum dolor sit amet, consectetur adip inc commodo con laoreet inter lore variants lore mauris just sed diam non pro id el met else in elit.    
                        </span>

                        </div>
                        <span className="individual-names"><h5>Steve Mills</h5></span>
                    
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <span><h6 className="testimonial-heading">TESTIMONIALS</h6></span>
                    <Carousel.Caption class>
                    <span className=""><h3>What our customers are saying</h3></span>
                    <div className="testimonial-first-rows">
                        
                        <span id="lorem">
                        Lorem ipsum dolor sit amet, consectetur adip inc  commodo con laoreet inter lorem.
                        lorem ipsum dolor sit amet, consectetur adip inc commodo con laoreet inter lore variants lore mauris just sed diam non pro id el met else in elit.    
                        </span>

                        </div>
                        <span className="individual-names"><h5>Henry Packard</h5></span>
                    
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <span><h6 className="testimonial-heading">TESTIMONIALS</h6></span>
                    <Carousel.Caption class>
                    <span className=""><h3>What our customers are saying</h3></span>
                    <div className="testimonial-first-rows">
                        
                        <span id="lorem">
                        Lorem ipsum dolor sit amet, consectetur adip inc  commodo con laoreet inter lorem.
                        lorem ipsum dolor sit amet, consectetur adip inc commodo con laoreet inter lore variants lore mauris just sed diam non pro id el met else in elit.    
                        </span>

                        </div>
                        <span className="individual-names"><h5>John Miles</h5></span>
                    
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

            <div className="illustration">
                <img className="illustrate" src= {WhatCustomers} alt="illustration" ></img>
            </div>
        </div>

      
    </section>
);
    
}

