import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const characterService = {
    getById:(id)=> apiService.get(urls.characters.byId(id))
}

export {
    characterService
}