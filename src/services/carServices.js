import {apiServices} from "./apiServices";
import {urls} from "../constans/urls";

const carServices = {
    getAll:() => apiServices.get(urls.base),
    create:(data) => apiServices.post(urls.base, data),
    deleteById: (id) => apiServices.delete(urls.byId(id)),
    updateById: (id,car) => apiServices.put(urls.byId(id), car)
}

export {
    carServices
}