import React from 'react';
import {useForm} from "react-hook-form";

const CommentForm = ({setTrigger}) => {
    const {register, reset, handleSubmit, formState:{isValid, errors}, setValue} = useForm({
        mode:"all"
    })
    return (
        <div>
            <form>
                <input type="text"/>
            </form>
        </div>
    );
};

export default CommentForm;