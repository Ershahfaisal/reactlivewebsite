import { Routes, Route, Navlink } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Service from '../pages/Service';
import Team from '../pages/Team';
import Portfolio from '../pages/Portfolio';
import Blog from '../pages/Blog';
import Single from '../pages/Single';
import Contact from '../pages/Contact';
import React from "react";
export default function Router(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Service" element={<Service />} />
                <Route path="Team" element={<Team />} />
                <Route path="Portfolio" element={<Portfolio />} />
                <Route path="Blog" element={<Blog />} />
                <Route path="Single" element={<Single />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
    )
}