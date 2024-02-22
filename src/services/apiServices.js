import axios from "axios";
import {carsUrl} from "../constans/urls";

const apiServices = axios.create({baseURL: carsUrl})

export {
    apiServices
}