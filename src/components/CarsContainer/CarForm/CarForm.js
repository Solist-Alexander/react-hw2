import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import style from './CarForm.css'
import {carServices} from "../../../services/carServices";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../../store/slices/carSlice";
import {carValidator} from "../../../validators/carValidator";
import {joiResolver} from "@hookform/resolvers/joi";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue,formState: {isValid, errors}} = useForm({
        mode:"all",
        resolver: joiResolver(carValidator)
    })
    const {carForUpdate} = useSelector(state => state.cars)
    const dispatch = useDispatch();

    useEffect(()=>{
        if (carForUpdate){
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    },[carForUpdate])

    const save = async (car) => {
        await carServices.create(car)

        reset()
    }

    const update = async (car) =>{
        carServices.updateById(carForUpdate.id, car)
        dispatch(carActions.setCarForUpdate(null))
        reset()
    }


    return (
        <div>
            <form onSubmit={handleSubmit(!carForUpdate ? save : update)} className={'divCarForm'}>
                <label> brand<input type="text" placeholder={'brand'} {...register('brand', { required: true })}/></label>
                <label> price<input type="text" placeholder={'price'} {...register('price', { required: true })}/></label>
                <label> year<input type="text" placeholder={'year'} {...register('year', 11)}/></label>
                <button disabled={!isValid}>{!carForUpdate ? "save" : "update"}</button>
                {errors.brand && <div>{errors.brand.message}</div>}
                {errors.price && <div>{errors.price.message}</div>}
                {errors.year && <div>{errors.year.message}</div>}
            </form>
            
        </div>
    );
};

export default CarForm;