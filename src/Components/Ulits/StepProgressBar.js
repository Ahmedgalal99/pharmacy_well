import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import MyRedCircle from "./MyRedCircle";
import Circle from "./Circle";
const StepProgress = ({value}) => {

  return (
    <div className='w-80 m-5 '>
        <ProgressBar
        percent={value}
        height={4}
        unfilledBackground="#ECC1C1"

                filledBackground="linear-gradient(to right, #DD1717, #DD1717)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
             <div style={{marginTop:"22px",height:"53px",}}  className="d-flex justify-content-between align-items-center flex-column">
             {accomplished && value < 35  ? (
               <Circle accomplished={accomplished} />
             ) : (
               <MyRedCircle  accomplished={accomplished}/>
             )}
             <div  >Received </div> {/* Add text for Step 4 */}
           </div>
              // accomplished ?  < Circle accomplished={accomplished} />  : <MyRedCircle accomplished={accomplished}  /> 
              )}
        </Step>
        
        <Step transition="scale">
          {({ accomplished }) => (
             <div style={{marginTop:"22px",height:"53px",}}  className="d-flex justify-content-between align-items-center flex-column">
              {accomplished && value < 70 ? (
                <Circle accomplished={accomplished} />
              ) : (
                <MyRedCircle accomplished={accomplished} />
              )}
              <div >Prepared</div> {/* Add text for Step 4 */}
            </div>
              )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div style={{marginTop:"22px",height:"53px",}}  className="d-flex justify-content-between align-items-center flex-column">
             {accomplished && value < 100 ? (
               <Circle accomplished={accomplished} />
             ) : (
               <MyRedCircle accomplished={accomplished} />
             )}
             <div >On its way</div> {/* Add text for Step 4 */}
           </div>

          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
        <div style={{marginTop:"22px",height:"53px",}}  className="d-flex justify-content-between align-items-center flex-column">
               {accomplished && value === 100? (
                
                <MyRedCircle accomplished={accomplished} />
                ) : (
                 <MyRedCircle accomplished={accomplished} />
               )}
               <div >Delivered</div> {/* Add text for Step 4 */}
             </div>
            
              // accomplished ?  < Circle />  : <MyRedCircle /> 
            
                       

          )}
        </Step>
      </ProgressBar>
    </div>
  )
}

export default StepProgress