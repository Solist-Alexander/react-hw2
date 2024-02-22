import {apiServices} from "./apiServices";
import {urls} from "../constans/urls";

const albumServices = {
    getAll: ()=> apiServices.get(urls.albums.base)
}

export {
    albumServices
}