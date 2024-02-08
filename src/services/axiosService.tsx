import axios from "axios";
import {placeHolderUrl} from "../constans/urls";

const placeHolderService = axios.create({baseURL: placeHolderUrl})

export {placeHolderService};