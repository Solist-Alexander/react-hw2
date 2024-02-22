import {apiServices} from "./apiServices";
import {urls} from "../constans/urls";

const todoServices = {
    getAll:()=> apiServices.get(urls.todos.base)
}

export {
    todoServices
}