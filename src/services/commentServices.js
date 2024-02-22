import {urls} from "../constans/urls";
import {apiServices} from "./apiServices";

const commentServices = {
    getAll:() => apiServices.get(urls.comments.base),
    getPostById:(postId) => apiServices.get(urls.comments.byId(postId))
}

export {
    commentServices
}