import React from 'react'
import styles from '@/styles/requests.module.css'
import Button from '@mui/material/Button';

const ButtonWriteReview = ({txtColor,bckColor,BRColor,text,clicking}) => {
  return (
    <Button className={styles.ButtonWriteReview} style={{backgroundColor:bckColor,marginBottom:"16px",borderRadius:"4px",border:`1px solid ${BRColor}`}} onClick={clicking}>
        <h5 className='m-0' style={{color:txtColor,fontSize:"15px"}}>{text}</h5>

    </Button>
  )
}

export default ButtonWriteReview