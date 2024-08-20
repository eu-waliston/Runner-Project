import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../components/About/About";
import Characters from "../components/Characters/Characters";
import Trailer from "../components/Trailer/Trailer";


const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={[<Home/>, <About/>, <Characters/>, <Trailer/>]}/>
        </Routes>
    )
}

export default AllRoutes;