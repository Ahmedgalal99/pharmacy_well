import React from 'react';
import styles from '@/styles/ulits.module.css'

const Circle = ({accomplished}) => {
  return (
    <div className={styles.circlecontainer}>
      <div className={styles.circleBeg} style={{backgroundColor:"#DD1717"}}></div>
      
    </div>
  );
};

export default Circle;