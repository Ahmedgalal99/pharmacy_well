import React from 'react'
import styles from '@/styles/confirmation.module.css'
import vector from '../assets/img/vector.png';

import icon from '../assets/img/icon.png';
import alert from '../assets/img/alert.png';

import Image from 'next/image'
import ButtonCheckOurPrpducts from "../Components/Requests/ButtonCheckOurPrpducts"

const OrderCancel = () => {
  return (
    <main className={styles.main} style={{backgroundColor:"#EDEDED"}}>
    <div className='w-100 mt-2 pt-4 pl-3 pr-3 pb-4 d-flex justify-content-center align-items-center '
 style={{backgroundColor:"#0F4392",borderRadius:10,height:"117px",position:"relative"}}>
    <div className=' d-flex justify-content-center align-items-center '>
        <h2 style={{color:"white",margin:"0px",fontWeight:"500"}}>Order Cancellation</h2>
        <Image
        //  className="w-20"
        src={alert}
        style={{position:"absolute",right:"60px"}}

        alt="Next.js Logo"
        width={19}
        height={24}
        priority
        />
         <div className=' d-flex justify-content-center align-items-center ' style={{height:"24px",width:'24px',borderRadius:"50%",backgroundColor:"#C5CAD4",position:"absolute",right:"20px"}}>
        <Image
        //  className="w-20"
        src={icon}

        alt="Next.js Logo"
        width={14}
        height={16}
        priority
        />
        </div>


    </div>


    </div>
 

    <div className=' d-flex justify-content-center align-items-center mt-5'>
        <div className={styles.Bigcircle} >
        <div className={styles.circle} style={{backgroundColor:"#0f439242"}}>
            <div  className=' d-flex justify-content-center align-items-center mt-3 ' style={{position:"absolute"}}>
            <Image
        //  className="w-20"
        src={vector}
        style={{position:"absolute",bottom:"-24px",left:"-66px"}}
        alt="Next.js Logo"
        width={165}
        height={130}
        priority
       
      />
            </div>
       
        </div>

        </div>
    </div>

    
  
  <div className=' d-flex justify-content-center align-items-center flex-column mt-5'>
    <h4 style={{fontSize:"21px",color:"#585859",fontWeight:"bold",margin:"0px",lineHeight:"28px"}}>Your Order has been Cancelled</h4>
    <h4 style={{fontSize:"21px",color:"#585859",fontWeight:"bold",margin:"0px",lineHeight:"28px"}}>succussfully </h4>

  </div>
  <div className='w-100 d-flex justify-content-center align-items-center flex-column mt-5'>
  <ButtonCheckOurPrpducts txtColor="white" bckColor="#0F4392" BRColor="#0F4392" text="Check Our products"/>

  </div>
 
  </main>
  )
}

export default OrderCancel
