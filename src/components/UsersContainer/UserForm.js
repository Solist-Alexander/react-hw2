import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/userService";

const UserForm = ({setTrigger}) => {
    const {register, reset, handleSubmit, formState:{isValid, errors}, setValue} = useForm({
        mode:"all"
    })

    const save = async (user) => {
        await userService.create(user).then(({data}) => console.log(data))
        setTrigger(prev => !prev)
        reset()
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'name'} {...register('name', {
                    pattern:{
                        value: /^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/,
                        maxLength: 20,
                        minLength: 1,
                        message: 'много символов'
                    }
                })
                }/>
                <input type="text" placeholder={'username'} {...register('username',{
                    pattern:{
                        value: /^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/,
                        maxLength: 20,
                        minLength: 1,
                        message: 'много символов'
                    }
                })
                }/>
               <button disabled={!isValid}>Create</button>
                {errors.name && <div>{errors.name.message}</div>}
                {errors.username && <div>{errors.name.message}</div>}
            </form>
        </div>
    );
};

export default UserForm;