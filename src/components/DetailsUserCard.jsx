import React from 'react'
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import './DetailUser.css'
function DetailsUserCard({cardData,isModalVisible,setIsModalVisible}) {
  
const handleCancel = () => {
  setIsModalVisible(false);
};
  return (
    <Modal  footer={null} visible={isModalVisible} onCancel={handleCancel}>

            <div style={{
                "width":"100%" ,
                "height":"100%", 
               "display":"flex",
               "flexDirection":"column",
               "borderRadius":"50px" }}>

          <div style={{
                    "width":"100%" ,
                    "height":"50%", 
                  "display":"flex",
                  "flexDirection":"row",
                  "gap":"50px",
                  'lineHeight':"10px",
                  // "borderRadius":"50px"
                  }}
                 >
                  
                  <div className='imageDiv'> 
                      <img  className='image' src={cardData[0].image} alt="" />
                  </div>
                 <div style={{'lineHeight':"20px"}}>

                    <h3 style={{"fontWeight":"bold"}}>{cardData[0].name}</h3>

                    <h3>
                          <span 
                              className={
                                cardData[0].status==="Alive" ? "green" 
                                :(cardData[0].status==="unknown") 
                                ?"grey" : "red"}
                                style={{"fontWeight":"bold","fontSize":"60px"}}>
                          .</span>

                      <span style={{"marginLeft":"20px"}}>{cardData[0].status}</span>
                    </h3>
                </div>
              </div>

  <hr style={{"width":"60%","marginRight":"200px","fontWeight":"bold"}}/>


              <div style={{"display":"flex",
              'flexDirection':"column",
              "gap":"20px"
              }}>
                  
                  <div style={{"display":'flex' ,"justifyContent":"space-around", "gap":"50px"}}>
                      <div style={{
                        // "width":"50px",
                      "height":"50px",
                      "lineHeight":"5x"
                      }} >
                        <p>Gender</p>
                        <h3>{cardData[0].gender}</h3>
                      </div>
                      <div style={{
                        // "width":"50px",
                      "height":"50px",
                      "lineHeight":"5x"
                      }} >
                        <p>Location</p>
                        <h3>{cardData[0].location.name}</h3>
                      </div>
                   </div>
                  
                  <div style={{"display":'flex' ,"justifyContent":"space-around","gap":"50px"}}>

                      <div style={{
                        // "width":"50px",
                        "height":"50px",
                        "lineHeight":"5x"}} >

                        <p>Species</p>
                        <h3>{cardData[0].species}</h3>

                        
                      </div>
                      <div style={{
                        // "width":"50px",
                        "height":"50px",
                        "lineHeight":"5x"}} >
                        <p>Origin</p>
                         <h3>{cardData[0].origin.name}</h3>  
                      </div> 
                  </div>
              </div>
           </div>
        </Modal>
  )
}

export default DetailsUserCard
