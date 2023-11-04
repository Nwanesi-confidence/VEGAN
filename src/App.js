import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import AboutUs from "./AboutUs/About";
import OrderItems from "./Order/OrderNow";
import Meals from "./OurMeal/Meal";
import Food from "./Food/Food";
import ContactPage from "./Contact/Contact";
import Navigation from './index.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element= {<Navigation/>} />
        <Route path = "/about" element= {<AboutUs/>} />
        <Route path = "/order" element= {<OrderItems/>} />
        <Route path = "/meal" element= {<Meals/>} />
        <Route path = "/food" element= {<Food/>} />
        <Route path = "/contact" element= {<ContactPage/>} />
      </Routes>
    </div>
  );
}

export default App;
