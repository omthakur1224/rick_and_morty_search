import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, nextPage, prevPage, storeData } from '../redux/action';
import { Store } from '../redux/store';
// import { Input, Space } from 'antd';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';

import './BasicUserDetail.css'
function BasicUserCard() {

    // const { Search } = Input;
    const [search,setSearch]=useState("")

    const inner=useRef();

    const onSearch = (value) => console.log(value);

    const dispatch=useDispatch();

    var data=useSelector(Store=>Store.data)
    
    const page=useSelector(Store=>Store.page)
    // console.log("data get",data)
    useEffect(()=>{
        dispatch(getData());
    },[])


const handleChange=()=>{
  // let search=e.target.search;
  // data.filter((elem)=>elem.name.toLowerCase().includes(search.toLowerCase()))
  // dispatch(storeData(result));
  // data=result;
}

 const handleScroll=()=>{
  
    if (inner.current) {  

        const { scrollTop, scrollHeight, clientHeight } = inner.current;
            console.log("iner",inner)

        if (scrollTop + clientHeight >= scrollHeight * 0.98) {

                 console.log("reached bottom");

         if(page<6) {

                dispatch(nextPage(1))

                dispatch(getData());
               }
         }
      else if (scrollTop + clientHeight <= scrollHeight && page>1) {

          console.log("reached top");

              dispatch(prevPage(1))
              dispatch(getData());
          }
      }
 }
  return (
    <div style={{

       "overflow":"scroll",

        "width":"100%",

        "backgroundColor":"white"

        }}

      ref={inner}

      onScroll={handleScroll} >

        <h1>Rick and Morty Search</h1>
        
        <div className="wrapper">

            <img className="icon" src="https://cdn0.iconfinder.com/data/icons/TWG_Retina_Icons/64/magnifier.png" alt="" />

            <input placeholder='search for a contact' className="search" type='text'
             onChange={(e)=>setSearch(e.target.value)}></input>

        </div> 

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

        <div style={{
            "display":"flex",
            "flexDirection":"column",
            // "overflow":"scroll",
            "gap":"2px",
            "width":"450px",
            "height":"300px",
            "margin":"auto",
            "backgroundColor":"white"
          }}
        //   ref={inner}
        //   onScroll={handleScroll} 
        >
         {  data.filter((el)=>{
            if(search===""){
              return el;
            }
            else if(el.name.toLowerCase().includes(search.toLowerCase())){
              
               return el;
            }
         }).map((elem )=>

            <div key={elem.id} style={{
                        "display":"flex",
                        "justifyContent":"space-around",
                        "width":"450px",
                        "margin":"auto",
                       "height":"50px",
                       "boxShadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                       }}>
                    <div className='left'>
                        <div className='avtara'>
                             <img style={{"width": "30px","height": "30px"}} src={elem.image} alt="image" />
                        </div>  
                        <div>
                            <h6 style={{"textAlign":"left"}}>{elem.name}</h6>
                        </div>
                    </div>

                    <div style={{'display':"flex",
                    "alignItems":"left",
                    "alignContent":"flex-start"}}>
                        
                        <h6 
                        style={{"textAlign":"left","margin":"auto"}}
                        >
                            <span className={(elem.status==="Alive")? "green" : 
                            (elem.status==="unknown") ?  "grey" : "red"}
                            >. &nbsp;</span> 
                        {elem.status}<span>-</span>{elem.species}</h6>
                    </div>
              </div>
         )
        }
    </div> 
        {/* <Link className='link' to={`/job_desc/${elem.id}`}>
        <Button variant='contained'
                       >Know more here</Button>
                </Link> */}
               
    </div>
  )
}

export default BasicUserCard