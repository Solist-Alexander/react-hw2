import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const userService = {
    getAll:()=> apiService.get(urls.base),
    create:(data) => apiService.post(urls.base, data)
}

export {
    userService
}