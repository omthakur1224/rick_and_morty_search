import { DATA, NEXT, PREV, TOTAL_OBJ, TOTAL_PAGES} from "./actionTypes.js";
import { Store } from "./store.js";

export const nextPage=(payload)=>{
    
    return {
        type:NEXT,
        payload
    }
}

export const prevPage=(payload)=>{
    return {
        type:PREV,
        payload
    }
}
export const storeData=(payload)=>{
    return {
        type:DATA,
        payload
    }
}

export const totalPages=(payload)=>{
    return {
        type:TOTAL_PAGES,
        payload
    }
}
export const totalObjects=(payload)=>{
    return {
        type:TOTAL_OBJ,
        payload
    }
}

export const getData=()=>async(dispatch)=>{

    // console.log("store.page",Store.getState().page)

    //Getting page number from store
    const page=Store.getState().page;

    // Data fetching along with Pagination 
    let data = await fetch(`https://rickandmortyapi.com/api/character/?name=rick&page=${page}`);
    let res=await data.json()
      dispatch(storeData(res.results));
      dispatch(totalPages(res.info.pages));
      dispatch(totalObjects(res.info.count))
  }