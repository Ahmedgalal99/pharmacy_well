import React from 'react'
import styles from '@/styles/requests.module.css'

const ButtonCheckOurPrpducts = ({txtColor,bckColor,BRColor,text}) => {
  return (
    <div className={styles.btnCheckOurPrpducts} style={{backgroundColor:bckColor,marginBottom:"16px",borderRadius:"4px",border:`1px solid ${BRColor}`}}>
        <h5 style={{color:txtColor,fontSize:"15px"}}>{text}</h5>

    </div>
  )
}

export default ButtonCheckOurPrpducts
