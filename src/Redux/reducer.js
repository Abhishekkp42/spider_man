import { ADD_DATA } from "./action"

const initstate={
    data:""
}

export const reducer=( store=initstate, {type,payload} )=>{

    switch (type){
        case ADD_DATA:
            console.log("Store", store)

            return {
                ...store,
                data: payload
            }

            default:
                return store;
    }
}