import React from 'react'
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import './DetailUser.css'
function DetailsUserCard({cardData,isModalVisible,setIsModalVisible}) {
  
const handleCancel = () => {
  setIsModalVisible(false);
};
  return (
    <Modal width={350} 
              // title={cardData[0].image}
              height={500} 
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
               <div className='grid'>
                    <div className='a' style={{"gridArea":"a"}}>A</div>
                    <div className='b' style={{"gridArea":"b"}}> b</div>
                    <div className='c' style={{"gridArea":"c"}}> c</div>
                    <div className='d' style={{"gridArea":"d"}}> d</div>
               </div>
        </Modal>
  )
}

export default DetailsUserCard
