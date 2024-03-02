import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../../../../components/Navigation/Navigation";

const Simulation1 = () => {
    return (
        <>
            <Navigation></Navigation>
            <h1>Simulation</h1>
            <p>Learn comeptitve programming today!</p>
            <Link to = "/bronze">Back to bronze</Link>
        </>
    );
};

export default Simulation1;