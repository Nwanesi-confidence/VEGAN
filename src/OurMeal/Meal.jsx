import "./Meal.css";
import React from "react";
import NavigationBar from "../Navbar/CollapsibleExample"

function Meals (){
    return (
        <>
            <NavigationBar/>
            <div className="bgcontainer">
                <div className="description">
                    <h1 className="welcome">EXPLORE THE DIFFERENT VAIRTIES OF SEASONAL VEGAN FOOD</h1>
                    <h1 className="welcome">RANGING FROM HAMBURGER TO SALADS</h1>
                </div>
            </div>
        </>
        
    )
       
}

export default Meals;