import React, {useEffect, useState} from 'react';
import {carServices} from "../../services/carServices";
import Cars from "./Cars";
import CarForm from "./CarForm";

const CarsContainer = () => {
    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(()=>{
        carServices.getAll().then(({data})=>setCars(data))
    },[trigger])

    return (
        <div>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>
        </div>
    );
};

export default CarsContainer;