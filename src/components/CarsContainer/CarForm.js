import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carServices} from "../../services/carServices";
import async from "async";

const CarForm = ({setTrigger, setCarForUpdate, carForUpdate}) => {
    const {register, reset, handleSubmit, formState: {isValid, errors}, setValue} = useForm({
        mode: "all"
    })

    useEffect(()=>{
        if(carForUpdate){
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    })

    const save = async (car) =>{
        await carServices.create(car)
        setTrigger(prev=>!prev)
        reset()
    }

    const update = async (car) => {
        carServices.updateById(carForUpdate.id, car)
        setCarForUpdate(null)
        setTrigger(prev=>!prev)
        reset()
    }

    return (
        <div className={'divCarForm'}>
            <form onSubmit={handleSubmit(!carForUpdate?save:update) }>
                <input type="text" placeholder={'brand'}  {...register('brand', {
                    pattern: {
                        value: /^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/,
                        maxLength: 20,
                        minLength: 1,
                        message: 'max 20 символов'
                    }
                })
                }/>
                <input type="text" placeholder={'price'} {...register('price', {
                    valueAsNumber: true,
                    min: {value: 0, message: 'min 0'},
                    max: {value: 1_000_000, message: 'max 1_000_000'}

                })
                }/>
                <input type="text" placeholder={'year'}  {...register('year', {
                    valueAsNumber: true,
                    min: {value: 1990, message: 'min 1990'},
                    max: {value: new Date().getFullYear(), message: 'max current year'}
                })}
                />
                <button type="submit" disabled={!isValid}>Сохранить</button>

                {errors.brand && <div>{errors.brand.message}</div>}
                {errors.price && <div>{errors.price.message}</div>}
                {errors.year && <div>{errors.year.message}</div>}

            </form>
        </div>
    );
};

export default CarForm;