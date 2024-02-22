import axios from "axios";
import {placeHolderUrl} from "../constans/urls";

const apiServices = axios.create({baseURL: placeHolderUrl})

export {
    apiServices
}