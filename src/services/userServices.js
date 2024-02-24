import {apiServices} from "./apiServices";
import {urls} from "../constans/urls";

const userServices = {
    getAll:()=> apiServices.get(urls.users.base),
    getById:(id) => apiServices.get(urls.users.byId(id)),
    getPostsById:(userId) => apiServices.get(urls.users.postsById(userId)),
    getPostById:(postId) => apiServices.get(urls.users.postById(postId)),
    getPostCommentsById:(postId) => apiServices.get(urls.users.postCommentsById(postId))

}

export {
    userServices
}