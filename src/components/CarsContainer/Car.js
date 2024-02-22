import React from 'react';
import style from './cars.css'
import {carServices} from "../../services/carServices";

const Car = ({car, setCarForUpdate, setTrigger}) => {
    const {id, brand, price, year} = car

    const deleteById = async () => {
        await carServices.deleteById(id)
        setTrigger(prev => !prev)
    }

    return (
        <div className={'divCar'}>
            <h3>id: {id} <br/> brand: {brand} <br/> price: {price} <br/> year: {year}</h3>
            <button className={'buttonCar'} onClick={() => setCarForUpdate(car)}>Редактировать</button>
            <button className={'buttonCar2'} onClick={deleteById}>Удалить</button>
        </div>
    );
};

export default Car;