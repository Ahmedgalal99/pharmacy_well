import React from 'react';

const MyRedCircle = ({accomplished}) => {
  return (
    <div
      style={{
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        marginTop:"7px",
        backgroundColor: accomplished ?'#DD1717': "#ECC1C1",
      }}
    ></div>
  );
};

export default MyRedCircle;