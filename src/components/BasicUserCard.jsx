import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, storeData } from '../redux/action';
import { Store } from '../redux/store';
import { Input, Space } from 'antd';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete'
// import axios from 'axios'
import './BasicUserDetail.css'
function BasicUserCard() {
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
    const dispatch=useDispatch();

    const data=useSelector(Store=>Store.data)
    // const [data,setData]=useState([])
    // console.log("data get",data)
    useEffect(()=>{
        dispatch(getData());
    },[])

    // const getData=async ()=>{

    //    let response = await fetch('https://rickandmortyapi.com/api/character/?name=rick&page=1')

    //    let data=await response.json()

    //        console.log("data",data);

    //       setData(data)
    //    }
  return (
    <div>

        <h1>Rick and Morty Search</h1>
        {/* <i className="fa fa-instagram icon"> */}
{/*        
    <input style={{ "width":"300px",
                    // "margin":"auto",
                    "height":"40px",
                //    "boxShadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    }} type="search" /> */}

                        {/* </i> */}
                       {/* <Search
                            placeholder="input search text"
                            onSearch={onSearch}
                            style={{
                                "width": "200px",
                            }}
    /> */}
        <div className="wrapper">
            <img className="icon" src="https://cdn0.iconfinder.com/data/icons/TWG_Retina_Icons/64/magnifier.png" alt="" />
            <input placeholder='search for a contact' className="search" type='search'></input>
        </div> 


        <div style={{"display":"flex",
         "flexDirection":"column",
         "gap":"3px",
        //  "width":"50%",
        //  "margin":"auto"
         }}>
         {
            data.map((elem )=>

            <div key={elem.id} style={{
                        "display":"flex",
                        "justifyContent":"space-around",
                        "width":"300px",
                        "margin":"auto",
                       "height":"50px",
                       
                        "boxShadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                        // "paddingTop":-60
                        // "backgroundColor":'skyblue',
                        // "border":"solid 2px red"
                        }}>
                    <div className='left'>
                        <div className='avtara'>
                             <img style={{"width": "30px","height": "30px"}} src={elem.image} alt="image" />
                        </div>  
                        <div>
                            <h6 style={{"textAlign":"center"}}>{elem.name}</h6>
                        </div>
                    </div>

                    <div>
                        <h6 style={{"textAlign":"center"}}>{elem.status}<span>-</span>{elem.species}</h6>
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