import { Routes, Route, Navlink } from "react-router-dom";
import React from "react";
export default function Router(){
    return(
        <div>
            <Route>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="service" element={<Service />} />
            </Route>
        </div>
    )
}