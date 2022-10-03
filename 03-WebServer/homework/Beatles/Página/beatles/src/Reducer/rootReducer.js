import {SHOW_INFO} from "../Acciones/actions.js"

const initialState = {
    beatles: []
}

const rootReducer = (state = initialState,action)=>{
    switch (action.type) {
        case SHOW_INFO:
            return{
                ...state,
                beatles: action.payload
            }
    
        default:
            return{
                ...state
            }
    }
}

export default rootReducer