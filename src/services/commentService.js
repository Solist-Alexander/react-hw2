import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const commentService = {
    getAll:()=> apiService.get(urls.comments),
    create:(data) => apiService.post(urls.comments, data)
}

export {
    commentService
}