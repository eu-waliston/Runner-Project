import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../components/About/About";
import Characters from "../components/Characters/Characters";


const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={[<Home/>, <About/>, <Characters/>]}/>
        </Routes>
    )
}

export default AllRoutes;