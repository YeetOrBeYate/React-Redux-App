import{loading,success, failed} from "../action/Actions"



const initialState = {
    heros: [],
    error: null,
    isFetching: false
}

function reducer(state= initialState, action){
    switch(action.type){
        case loading:
            return{
                ...state,
                isFetching: true,
                error:null,
            };
        case success:
            return{
                ...state,
                heros:action.payload,
                isFetching:false,
                error:null
            };
        case failed:
            return{
                ...state,
                heros:[],
                isFetching: false,
                error:action.payload
            };
        default:
            return state
    }
}

export default reducer;