import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/userService";
import {commentService} from "../../services/commentService";

const CommentForm = ({setTrigger}) => {
    const {register, reset, handleSubmit, formState:{isValid, errors}, setValue} = useForm({
        mode:"all"
    })

    const save = async (comment) => {
        await commentService.create(comment).then(({data}) => console.log(data))
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
                <input type="text" placeholder={'email'} {...register('email',{
                    pattern:{
                        value: /^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/,
                        maxLength: 20,
                        minLength: 1,
                        message: 'много символов'
                    }
                })
                }/>
                <input type="text" placeholder={'body'} {...register('body',{
                    pattern:{
                        maxLength: 100,
                        minLength: 1,
                        message: 'много символов'
                    }
                })
                }/>
                <button disabled={!isValid}>Create</button>
                {errors.name && <div>{errors.name.message}</div>}
                {errors.email && <div>{errors.email.message}</div>}
                {errors.body && <div>{errors.body.message}</div>}
            </form>
        </div>
    );
};

export default CommentForm;