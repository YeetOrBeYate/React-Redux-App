import axios from "axios"

export const loading = "LOADING";
export const success = "SUCCESS";
export const failed = "FAILED";

export const heroLoading = ()=> {
    return {type: loading}
};

export const heroLoadingSuccess = (data)=>{
    return {type:success, payload: data}
}

export const heroLoadingFailed = (error)=>{
    return {type:failed, payload:error}
}

export function fetchHeros(){

    return function(dispatch){

        dispatch(heroLoading());

        return axios("https://overwatch-api.net/api/v1/hero")
            .then((res)=>{
                let yeet = res.data.data
                dispatch(heroLoadingSuccess(yeet))
            })
            .catch(error=>dispatch(heroLoadingFailed(error)))
    }
}