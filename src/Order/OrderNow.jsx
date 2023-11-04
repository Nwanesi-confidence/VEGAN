import "./OrderNow.css"
import hamburger from "./../media/veganhamburger1.jpg"
import NavigationBar from "../Navbar/CollapsibleExample"


function OrderItems (){
    return (
        <>
            <NavigationBar/>
            <section className="order-container">
                <div className="order-contain">
                    <div className="photo-container">
                        <img src = {hamburger} alt="hamburger"></img>
                    </div>
                    <div className="words-container">
                        <h1 className="price">$10</h1>
                        <h3 className="highlight">Delicious and healthy Hamburger</h3>
                        <h4 className="offer">Free delivery with advance payment</h4>
                        <span className="describing">Lorem per adsici Lorem adsici episci
                        lorem ad minim veniam et dolor ad minim ven folly et dolor ad minim ven folly adsici
                        lorem ad minim veniam et dolor ad minim ven folly adsici ad minim ven per ad lorem ven folly dolor </span>
                        <div className="order-button">
                            <span className="chart-adding">-  1 +</span>
                            <button className="button-order">ORDER NOW</button>
                        </div>
                    </div>
                </div>
        </section>
        </>
        
    )
}

export default OrderItems