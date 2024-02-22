import React, {useEffect, useState} from 'react';
import {todoServices} from "../../services/todoServices";
import Todos from "./Todos";

const TodosContainer = () => {
    const [todos, setTodos] = useState([])

    useEffect(()=>{
        todoServices.getAll().then(({data}) => setTodos(data))
    })

    return (
        <div>
            <Todos todos={todos}/>
        </div>
    );
};

export default TodosContainer;