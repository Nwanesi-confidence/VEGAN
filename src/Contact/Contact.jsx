import "./Contact.css"
import contact from "./../illustrations2/contact.svg"
import NavigationBar from "../Navbar/CollapsibleExample"
// import CollapsibleExample from "./Navbar/CollapsibleExample";
function ContactPage() {
    return (
        <>
            <NavigationBar/>
            <section className="contact-info-container">
                <div className="contact-img-container">
                    <img src={contact} alt="contact"/>
                </div>

                <div className="contact-container">
                    <h1 className="contact-title">GET IN TOUCH</h1>
                    <input type="text" className="contact-input" placeholder="Name"></input>
                    <input type="email" className="contact-input" placeholder="Email"></input>
                    <input type="text" className="contact-input" placeholder="Location"></input>
                    <input type="text" className="contact-input" placeholder="Message"></input>
                    <button type="button" className="send">SEND</button>
                </div>
            </section>
        </>
       
    )
      
}

export default ContactPage