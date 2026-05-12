import React from 'react'
import styles from '@/styles/ulits.module.css'
import phone from '../../assets/img/phone.png';

import Image from 'next/image'
const Button = ({txtColor,bckColor,BRColor,text}) => {
  return (
    <div className={styles.btn} style={{backgroundColor:bckColor,borderRadius:"5px",border:`1px solid ${BRColor}`}}>
       <Image
            //  className="w-20"
            src={phone}
           

            alt="Next.js Logo"
            width="15px"
            height="20px"
            priority
            />                
        <h5 style={{color:txtColor,marginTop:0}}>{text}</h5>

    </div>
  )
}

export default Button