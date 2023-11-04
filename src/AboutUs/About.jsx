import "./About.css"
import aboutus from "./../illustrations2/aboutus.svg"
import NavigationBar from "../Navbar/CollapsibleExample"
// import NavigationBar from "./Navbar/CollapsibleExample"

function AboutUs (){
    return (
        <>
        <NavigationBar/>
        <section className="aboutus-container">
            <div className = "aboutus-vegan-glory">

                <div className="aboutus-vegan-title-container">
                    <h1 className = "aboutus-vegan-glory-title">About Vegan-Glory</h1>
                    <span className = "aboutus-vegan-glory-title2">Vegan-Glory is a B2C web service company founded in 2023 with operation in Akure, Ondo State</span>
                </div>

                <div className="aboutus-illustration">
                        <img className = "aboutus-vegan-glory-illustration" src={aboutus} alt="illustration"/>
                </div>

            </div>

            <div className = "aboutus-vegan-glory-mission">
                <div className="aboutus-mission">
                    <h1 className = "aboutus-vegan-glory-title2">OUR MISSION</h1>
                    <span className = "aboutus-vegan-glory-title3">LISTEN TO OUR CUSTOMERS</span>
                </div>
                <div className="aboutus-paragraph1">
                    <span className = "aboutus-vegan-glory-text1">We listen and acts precisely based on our customer needs.</span>
                    <span className = "aboutus-vegan-glory-text2">We listen and acts precisely based on our customer needs in the following ways:
                    
                        We solve challenging problems of distribution of Vegan products and cooked meals with this easy-to-use
                        web service to streamless the decisions processes of our customer non where to find deliciously cooked vegan meals with freshness 
                        and nutrious in all ramification hence we are here to deliver one-to-one freshly cooked vegan meals and product.
                    
                    </span>
                </div>
            </div>

            <div className="aboutus-cards">
                    <div className="aboutus-card1">
                        <div className="aboutus-paragraph">
                            <span>
                                Proactively target your taste buds after customer-centric 
                                process improvements.
                            </span>
                           
                        </div>
                        <div className="aboutus-paragraph">
                            conveiently formulated goal-oriented experience of lasting freshing and deliciousness
                            in the buds of our customers.
                        </div>
                        <div className="aboutus-paragraph">
                            proactively orchestrated our ingredients for the satisfication of our customers 
                            of all catergories and wants and continually optimizing our products for higher standards than before through dedications
                            and resilience.
                        </div>
                    </div>
                    
                    
            </div>
                
        
        </section>
        </>
        
    )
}

export default AboutUs