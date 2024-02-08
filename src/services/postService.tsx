import {placeHolderService} from "./axiosService";
import {urls} from "../constans/urls";
import {IPost, IPropsDetails} from "../interfaces/postInterfaces/postInterfaces";

const postService = {
    getAll:() => placeHolderService(urls.posts.base),
    getById:(id:number):Promise<IPropsDetails> => placeHolderService(urls.posts.byId(id))


}

export {postService};