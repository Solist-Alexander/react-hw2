import React from 'react';

import style from './Car.css'
import {carServices} from "../../../services/carServices";
import {useDispatch} from "react-redux";
import {carActions} from "../../../store/slices/carSlice";



const Car = ({car}) => {
    const {id, brand, price, year} = car
    const dispatch = useDispatch();

    const deleteById = async (id)=>{
       await carServices.deleteById(id)
        dispatch(carActions.trigger())
    }



    return (
        <div className={'divCar'}>
            <h3>id: {id} <br/> brand: {brand} <br/> price: {price} <br/> year: {year}</h3>
            <button className={'buttonCar'} onClick={()=> dispatch(carActions.setCarForUpdate(car))}>Редактировать</button>
            <button className={'buttonCar2'} onClick={() => deleteById(id)}>Удалить</button>
        </div>
    );
};

export default Car;