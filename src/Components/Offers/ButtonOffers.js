import React from 'react'
import styles from '@/styles/offers.module.css'
import phone from '../../assets/img/phone.png';

import Image from 'next/image'
const ButtonOffers = ({txtColor,bckColor,BRColor,text,onPress}) => {
  return (
    <div className={styles.btnoffer} onClick={onPress} style={{backgroundColor:bckColor,borderRadius:"5px",border:`1px solid ${BRColor}`,cursor:"pointer"}}>
                     
        <div className={styles.txtbtn} style={{color:txtColor,marginTop:0,lineHeight:"16px"}}>{text}</div>

    </div>
  )
}

export default ButtonOffers