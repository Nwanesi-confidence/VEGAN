import "./Header.css"
import people from "../illustrations/people.svg"
import { FaShoppingBasket } from "react-icons/fa"
// import  video2  from "./../illustrations/video.mp4"

function Header (){
    return (
        
        <header className="header-section">
            <section className="content-container">
                <div className="content-text">
                    <h1 className="title">VEGETARIAN? </h1>
                    <h3 className="title2">not a crime</h3>
                    <h3 className="title3">we've got you covered</h3>
                    <p className="sub-text">Enjoy homemade vegetarian meals</p>
                    <p className="subtext">Lorem ipsum dolor amet consectetur adipiscing elit. 
                    Tenetur nihil enus rerum, porro magnam delenti nostrum nulla ipsam ab maxime
                    doloremque veniam conseuuntur! Aspenatur ea dolor, deserunt nihil ipsam nobis?
                    </p>

                    <div className="buttons">
                        <button className="btn1"><a id = "btn1-achor" href="/order">Order now <FaShoppingBasket/> </a></button>
                        <button className="btn2"><a id = "btn2-achor" href="/food">See all Foods</a></button>
                    </div>
                </div>
                
                <div className="content-illustration">
                    <img className="illustrated" src= {people} alt="hello" ></img> 
                </div>

            </section>
        </header>
    )
}

export default Header