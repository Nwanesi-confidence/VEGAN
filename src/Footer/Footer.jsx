import "./Footer.css";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHeartbeat} from "react-icons/fa";

function Footer (){
    return (
        <footer className="footer-main" id="contact">
            <section className = "footer-container">
                <div className = "first-rows">
                    <div className="brand-logo-name">
                        <span className="brand-name"><FaHeartbeat/>VEGAN-GLORY</span>
                    </div>
        
                    <div className="who-we-are">
                        <span><h3 className="question">WHO WE ARE</h3></span>
                        <span><h3>Our history</h3></span>
                        <span><h3>Our brand</h3></span>
                        <span><h3>Sponsors</h3></span>
                    </div>
        
                    <div className="who-we-are">
                        <span><h3 className="question">WHAT WE DO</h3></span>
                        <span><h3>Policies</h3></span>
                        <span><h3>Financies</h3></span>
                        <span><h3>services</h3></span>
                        <span><h3>Delivery</h3></span>
                    </div>
        
                    <div className="event">
                        <span><h3>Events</h3></span>
                        <span><h3>Newsroom</h3></span>
                        <span><h3>Employment</h3></span>
                        <span><h3>Contact Development</h3></span>
        
                        <div className="icon">
                            <i><FaFacebook/></i>
                            <i><FaInstagram/></i>
                            <i><FaWhatsapp/></i>
                        </div>
                    </div>
                </div>
                

                <div className="info">
                    <p>Copyright 2023, Vegan-glory is an original built by Nwanesi Confidence for my Frontend Development course. 
                        Free use of this software does NOT apply if you plan to produce your own course or tutorials based on this 
                        original author for other use case is highly appreciated!.</p>
                </div>

            
            </section>
        </footer>
    )

}
export default Footer