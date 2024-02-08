import {placeHolderService} from "./axiosService";
import {urls} from "../constans/urls";

const postService = {
    getAll:() => placeHolderService(urls.posts.base),
    getById:(id:number) => placeHolderService(urls.posts.byId(id))


}

export {postService};