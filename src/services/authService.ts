import {ITokens} from "../interfaces/tokensInterface";
import {IAuth} from "../interfaces/authInterface";
import {IRes} from "../types/responseType";
import {IUser} from "../interfaces/userInterface";
import {urls} from "../constants/urls";
import {apiService} from "./apiService";

const accessTokenKey = 'access'
const refreshTokenKey = 'refresh'

const authService = {

    register(user:IAuth):IRes<IUser>{
        return apiService.post(urls.auth.register,user)
    },
    me():IRes<IUser>{
        return apiService.get(urls.auth.me)
    },
    setTokens({access, refresh}:ITokens):void{
        localStorage.setItem(accessTokenKey, access)
        localStorage.setItem(refreshTokenKey, refresh)
    },
    getAccessToken():string{
        return localStorage.getItem(accessTokenKey)
    },
    getRefreshToken():string{
        return localStorage.getItem(refreshTokenKey)
    },
    deleteTokens():void{
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    }
}

export {
    authService
}