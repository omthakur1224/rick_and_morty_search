import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, nextPage, prevPage, storeData } from '../redux/action';
import { Store } from '../redux/store';
import Pagination from './Pagination'
import './BasicUserDetail.css'
import  DetailsUserCard from './DetailsUserCard';
import { Link,useNavigate } from 'react-router-dom';
import { Button, Modal } from 'antd';
function BasicUserCard() {

    const [search,setSearch]=useState("")

    const inner=useRef();

    const navigate=useNavigate()
    const onSearch = (value) => console.log(value);

    const dispatch=useDispatch();

    var data=useSelector(Store=>Store.data)
    
    const page=useSelector(Store=>Store.page)
    // console.log("data get",data)
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(()=>{
        dispatch(getData());
    },[])

//function for handling scrolling

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

 const handleClick=()=>{
  // navigate('/')
 }

const [cardData,setCardData]=useState([])

 const showModal = (id) => {

   let result=data.filter((ele)=>ele.id==id);
   setCardData(result);
   setIsModalVisible(true);
};


console.log("cartData",cardData)



const handleCancel = () => {
  setIsModalVisible(false);
};
//check from here


  return (
    <div style={{

              "overflow":"scroll",

                "width":"100%",

                "backgroundColor":"white"

                }} ref={inner}

              onScroll={handleScroll} >

    <h1>Rick and Morty Search</h1>
        
        <div className="wrapper">

            <img className="icon" src="https://cdn0.iconfinder.com/data/icons/TWG_Retina_Icons/64/magnifier.png" alt="" />

            <input placeholder='search for a contact' className="search"
             type='text'
             onChange={(e)=>setSearch(e.target.value)}/>

          </div> 

       <Pagination/>

        <div style={{
            "display":"flex",
            "flexDirection":"column",
            "gap":"2px",
            "width":"450px",
            "height":"300px",
            "margin":"auto",
            "backgroundColor":"white"
          }}
   
        >
         {  data.filter((el)=>{
            if(search===""){
              return el;
            }
            else if(el.name.toLowerCase().includes(search.toLowerCase())){
              
               return el;
            }
         }).map((elem )=>
          <>
            <Button   
                     type='primary'
                     key={elem.id}
                     onClick={()=>{
                      setIsModalVisible(true);
                      showModal(elem.id)
                     }}
                     style={{
                        "display":"flex",
                        "justifyContent":"space-around",
                        "width":"450px",
                        "margin":"auto",
                        "backgroundColor":"white",
                       "height":"50px",
                       "boxShadow": "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                       }}>
                    <div className='left'>
                        <div className='avtara'>
                             <img style={{"width": "30px","height": "30px"}} src={elem.image} alt="image" />
                        </div>  
                        <div>
                            <h6
                            //  style={{"textAlign":"left","margin":"auto"}}
                             >{elem.name}</h6>
                        </div>
                    </div>

                    <div style={{'display':"flex",
                    "alignItems":"left",
                    "alignContent":"flex-start"}}>
                        
                        <h6 
                        // style={{"textAlign":"left","margin":"auto"}}
                        >
                            <span className={(elem.status==="Alive")? "green" : 
                            (elem.status==="unknown") ?  "grey" : "red"}
                            >. &nbsp;</span> 
                        {elem.status}<span>-</span>{elem.species}</h6>
                    </div>
              </Button>
          </>
         )
        }
       { cardData[0]!==undefined ? <Modal width={300} 
              // title={cardData[0].image}
              height={150} 
              footer={null} visible={isModalVisible} onCancel={handleCancel}>
               <div>
                  <div> 
                      <img src={cardData[0].image} alt="" />
                  </div>
                  <div>
                    <h6>
                      <span className={
                        cardData[0].status==="Alive" ? "green" 
                        :(cardData[0].status==="unknown") 
                        ?"grey" : "red"}>
                      .</span>

                      <span>{cardData[0].status}</span>
                      <span>{cardData[0].name}</span>
                    </h6>
                  </div>
               </div>
               <div></div>
        </Modal>:"" }
    </div>
  </div>
  )
}

export default BasicUserCard