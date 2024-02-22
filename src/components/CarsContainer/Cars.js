import React from 'react';

import Car from "./Car";
import style from './cars.css'


const Cars = ({cars, setCarForUpdate ,setTrigger}) => {
    return (
        <div className={'divCars'}>
            {cars.map(car=> <Car car={car} key={car.id} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>)}
        </div>
    );
};

export default Cars;