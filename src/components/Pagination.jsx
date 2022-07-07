import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData, nextPage, prevPage } from '../redux/action';
import './BasicUserDetail.css'
function Pagination() {

  const dispatch=useDispatch();
  
  const {page,data}=useSelector(Store=>Store)
  return (
    <>
         <button className='pagination' disabled={page<2?true:false} 
                        onClick={()=>{
                                  dispatch(prevPage(1));
                                  dispatch(getData());
                                }}
                >Prev </button>

                <span> &nbsp;&nbsp;{page}&nbsp;&nbsp; </span>

                <button className='pagination' disabled={data.length<20?true:false} 
                        onClick={()=>{
                                  dispatch(nextPage(1));
                                  dispatch(getData());
                                }}
        > Next</button>
    </>
  )
}

export default Pagination