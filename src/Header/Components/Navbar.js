import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/* https://reacttraining.com/react-router/web/example/basic 

/* Navbar Pages */
// import Home from '../Pages/Home';
// import Breakfast from '../Pages/Breakfast';
// import Lunch from '../Pages/Lunch';
// import Dinner from '../Pages/Dinner';
// import Desert from '../Pages/Desert';
// import Smoothies from '../Pages/Smoothies';


const navbar = () => (

    <div className="navbar-container">
        <ul className="navbar">
            <li><a href="#home">Home</a></li>
            <li><a href="#breakfast">Breakfast</a></li>
            <li><a href="#lunch">Lunch</a></li>
            <li><a href="#dinner">Dinner</a></li>
            <li><a href="#desert">Desert</a></li>
            <li><a href="#smoothies">Smoothies</a></li>

            <div className="search-container">
                <form>
                    <input type="text" placeholder="Search.." />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
        </ul>
    </div>

    // <Router>
    //     <div className="navbar-container">
    //         <ul className="navbar">
    //             <li> <Link to="/">Home</Link> </li>
    //             <li> <Link to="/breakfast">Breakfast</Link> </li>
    //             <li> <Link to="/lunch">Lunch</Link> </li>
    //             <li> <Link to="/dinner">Dinner</Link> </li>
    //             <li> <Link to="/desert">Desert</Link> </li>
    //             <li> <Link to="/smoothies">Smoothies</Link> </li>
    //             <div className="search-container">
    //                 <form>
    //                     <input type="text" placeholder="Search.." />
    //                     <button type="submit"><i className="fa fa-search"></i></button>
    //                 </form>
    //             </div>
    //         </ul>

    //         <Route exact path="/" component={Home} />
    //         <Route path="/breakfast" component={Breakfast} />
    //         <Route path="/lunch" component={Lunch} />
    //         <Route path="/dinner" component={Dinner} />
    //         <Route path="/desert" component={Desert} />
    //         <Route path="/smoothies" component={Smoothies} />
    //     </div>
    // </Router>
);

export default navbar;
