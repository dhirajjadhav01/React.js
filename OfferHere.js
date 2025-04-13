import React from 'react'
import './First.css'
import {Link} from 'react-router-dom';


function OfferHere() {
  return (
<>
<Link className="custom-nav-link" to='/cou'>Click Here For - courses✒️</Link>
<div className="text-center mt-5">
          <img 
            src="https://i.pinimg.com/736x/fe/f6/c4/fef6c4e50ee9f17150ebdcbcbb5580f1.jpg" 
            alt="Learning Banner"
            style={{ width: '70%', borderRadius: '12px', height:'360px'}}
          />
        </div>

        <div className="text-center mt-5">
          <img 
            src="https://i.pinimg.com/736x/03/4f/0b/034f0b4b1fe77aaf3ea08a156e9a13f0.jpg" 
            alt="Learning Banner"
            style={{ width: '70%', borderRadius: '12px', height:'360px'}}
          />
        </div>

        <div className="text-center mt-5">
          <img 
            src="https://i.pinimg.com/474x/20/bc/47/20bc47e95718a158f55f6d3e2330ff85.jpg" 
            alt="Learning Banner"
            style={{ width: '70%', borderRadius: '12px', height:'360px'}}
          />
        </div>

        <h4>Let's Build Something legend🚀</h4>
</>
  )
}

export default OfferHere
