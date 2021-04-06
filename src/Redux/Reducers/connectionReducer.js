import {UPDATE_CONNECTION_TYPE,UPDATE_CONNECTION_STATUS} from '../Types'

const initialState = {
    online:true,
    connectionType:null,
};

const connectionReducer = (state=initialState,action)=>{
    switch (action.type){
        case UPDATE_CONNECTION_TYPE:
            return {connectionType:action.payload}
        case UPDATE_CONNECTION_STATUS:
           
            return {online:action.payload}
        default:
            return state
    }
};

export {connectionReducer};