import {DATA, NEXT, PREV, TOTAL_OBJ, TOTAL_PAGES } from "./actionTypes.js";

export const reducer=(Store,action)=>{

    switch(action.type){
        case DATA:
            return {...Store, data:action.payload};

        case TOTAL_OBJ:
            return{...Store, total_obj:action.payload};
        
        case TOTAL_PAGES:
            return{...Store, total_pages:action.payload}

         case NEXT:
            return {...Store,page:Store.page + action.payload};

        case PREV:
            return {...Store,page:Store.page - action.payload};

        default:
            return Store;
    }

}