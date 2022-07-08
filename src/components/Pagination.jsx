import { Button } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData, nextPage, prevPage } from '../redux/action';
import './BasicUserDetail.css'
function Pagination() {

  const dispatch=useDispatch();
  
  const {page,data}=useSelector(Store=>Store)
  return (
    <div style={{'display':"flex","justifyContent":"flex-end","marginTop":"10px",}}>

         <Button style={{"width":"100px", "height":"40px"}} className='pagination' disabled={page<2?true:false} 
                        onClick={()=>{
                                  dispatch(prevPage(1));
                                  dispatch(getData());
                                }}
                >Prev </Button>

                <span> &nbsp;&nbsp;{page}&nbsp;&nbsp; </span>

                <Button style={{"width":"100px", "height":"40px"}} className='pagination' disabled={page==6||data.length<20?true:false} 
                        onClick={()=>{
                                  dispatch(nextPage(1));
                                  dispatch(getData());
                                }}
        > Next</Button>
    </div>
  )
}

export default Pagination