import {SET_FILTER} from "./actionTypes";
import * as FilterTypes from "./filterTypes";


export const reducers =  (state=FilterTypes.ALL, action) =>{
    switch (action.type) {
        case SET_FILTER:{
            return action.filter
        }
        default :{
            return state
        }
    }
};