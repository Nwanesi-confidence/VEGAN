import "./Food.css";
import NavigationBar from "../Navbar/CollapsibleExample"
import Meals from "../OurMeal/Meal";
// import CollapsibleExample from "./Navbar/CollapsibleExample";
import veganhamburger1 from "./../media/veganhamburger1.jpg"
import veganhamburger2 from "./../media/veganhamburger2.jpg"
import veganhamburger3 from "./../media/veganhamburger3.jpg"
import veganhamburger4 from "./../media/veganhamburger4.jpg"
import veganhamburger5 from "./../media/veganhamburger5.jpg"
import veganhamburger6 from "./../media/veganhamburger6.jpg"
import pizza1 from "./../media/pizza1.jpg"
import veganpizza2 from "./../media/veganpizza2.jpg"
import veganpizza3 from "./../media/veganpizza3.jpg"
import veganpizza4 from "./../media/veganpizza4.jpg"
import veganpizza5 from "./../media/veganpizza5.jpg"
import veganpizza6 from "./../media/pexels-nataliya-vaitkevich-6275096.jpg"
import salad1 from "./../media/salad1.jpg"
import salad2 from "./../media/salad2.jpg"
import salad3 from "./../media/salad3.jpg"
import salad4 from "./../media/salad4.jpg"
import salad5 from "./../media/salad5.jpg"
import salad6 from "./../media/salad6.jpg"
import salad7 from "./../media/salad7.jpg"
import salad8 from "./../media/salad8.jpg"
import salad9 from "./../media/salad9.jpg"


function Food() {
    return(
        <>
            <NavigationBar/>
             <Meals/>
            <div className="Food-card">
                <h1>EXPLORE OUR FOOD LIBRARY</h1>
                <div className="food-container">
                    <h1 id="food-title">HAMBURGERS</h1>
                    <div className="food-img-container">
                        <div className="food-img">

                            <img src= {veganhamburger1} alt="food_image" />
                        </div>
                        <div className="food-img">
                            <img src= {veganhamburger2} alt="food_image" />
                        </div>
                        <div className="food-img">
                            <img src= {veganhamburger3} alt="food_image" />
                        </div>
                        
                        <div className="food-img">
                            <img src= {veganhamburger4} alt="food_image" />
                        </div>
                        
                        <div className="food-img">
                            <img src= {veganhamburger5} alt="food_image" />
                        </div>
                        
                        <div className="food-img">
                            <img src= {veganhamburger6} alt="food_image" />
                        </div>
                        
                    </div>
                </div>

                <div className="food-container">

                    <h1 id="food-title">PIZZA</h1>
                    <div className="food-img-container">
                        <div className="food-img">

                            <img src= {pizza1} alt="food_image" />
                        </div>
                        <div className="food-img">
                            <img src= {veganpizza2} alt="food_image" />
                        </div>
                        <div className="food-img">
                            <img src= {veganpizza3} alt="food_image" />
                        </div>
                        
                        <div className="food-img">
                            <img src= {veganpizza4} alt="food_image" />
                        </div>
                        
                        <div className="food-img">
                            <img src= {veganpizza5} alt="food_image" />
                        </div>
                        
                        <div className="food-img">
                            <img src= {veganpizza6} alt="food_image" />
                        </div>
                        
                    </div>
                </div>

                <div className="food-container">
                    <h1 id="food-title">SALADS</h1>
                    <div className="food-img-container">
                        <div className="food-img">

                            <img src= {salad1} alt="food_image" />
                        </div>
                        <div className="food-img">
                            <img src= {salad2} alt="food_mage" />
                        </div>
                        <div className="food-img">
                            <img src= {salad3} alt="food_image" />
                        </div>
                        
                        <div className="food-img">
                            <img src= {salad4} alt="food_image" />
                        </div>
                        
                        <div className="food-img">
                            <img src= {salad5} alt="food_image" />
                        </div>
                        
                        <div className="food-img">
                            <img src= {salad6} alt="food_image" />
                        </div>

                        <div className="food-img">
                            <img src= {salad7} alt="food_image" />
                        </div>

                        <div className="food-img">
                            <img src= {salad8} alt="food_image" />
                        </div>
                        <div className="food-img">
                            <img src= {salad9} alt="food_image" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Food