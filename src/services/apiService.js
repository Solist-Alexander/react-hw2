import axios from "axios";
import {placeHolderUrl} from "../constans/urls";

const apiService = axios.create({baseURL: placeHolderUrl})

export {
    apiService
}