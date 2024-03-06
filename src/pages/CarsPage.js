import React from 'react';
import CarForm from "../components/CarsContainer/CarForm/CarForm";
import Cars from "../components/CarsContainer/Cars/Cars";

const CarsPage = () => {

    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>

        </div>
    );
};

export default CarsPage;