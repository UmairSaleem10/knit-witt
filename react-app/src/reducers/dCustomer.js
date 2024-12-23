import { ACTION_TYPES } from "../actions/dCustomer";
const initialState = {
    list: [],
}

export const dCustomer=(state=initialState.action)=>{
    switch(action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return{
                ...state,
                list:[...action.payload]
            }


            defaut:
            break;
    }
}