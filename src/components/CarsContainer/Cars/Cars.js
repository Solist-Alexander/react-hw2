import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carServices} from "../../../services/carServices";
import {carActions} from "../../../store/slices/carSlice";
import Car from "../Car/Car";

import style from './Cars.css'

const Cars = () => {
    const dispatch = useDispatch()
    const {cars} = useSelector(state => state.cars)


    useEffect(()=>{
        carServices.getAll().then(({data}) => dispatch(carActions.setAllCars(data)))
    })

    return (
        <div  className={'divCars'}>
            {cars.map(car => <Car car={car} key={car.id}/>)}
        </div>
    );
};

export default Cars;