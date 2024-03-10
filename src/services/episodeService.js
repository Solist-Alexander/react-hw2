import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const episodeService = {
    getAll:(page)=> apiService.get(urls.episodes.base,{params: {page}})
}

export {
    episodeService
}