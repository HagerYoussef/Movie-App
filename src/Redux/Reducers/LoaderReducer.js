const INITIAL_VALUE = {
    isLoad: true
}


export default function LoaderReducer(state=INITIAL_VALUE, action){

    switch (action.type){
        case "IS_LOADING":
            return{
                ...state,
                isLoad: action.payload
            }
        default: 
        return state
            
    }


}