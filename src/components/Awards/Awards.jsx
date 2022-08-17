import React from 'react'

export default function Awards() {
  return (
    <div className='awardsContainer page-content'>
      <div className="row">
         <div className="col-7">
           {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNL96bv2LE-FkA9I1Lm3hnbII517KvDMMRQA&usqp=CAU" alt="aweds" /> */}
           <h2 >Honors from yesterday is gone.</h2>
           <ul className='awardsUl1'>
             <li><h3>Looking for the value behinde</h3></li>
             <li><h3>deep communication with customer</h3></li>
             {/* <li><h3>spent every second and coin on core value</h3></li>
             <li><h3>our website shows our om principle</h3></li> */}
           </ul>
         </div>
   
         <div className="col-5">
            <img src="https://picsum.photos/500/300?grayscale&blur=2&random=1" alt="" />
         </div>

      </div>
      {/* <hr /> */}
      <div className="row">
         <div className="col-5">
         <img src="https://picsum.photos/500/300?grayscale&blur=2&random=2" alt="" />
           
         </div>
   
         <div className="col-7">
            <h2>Customer's Value is our Focus.</h2>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNL96bv2LE-FkA9I1Lm3hnbII517KvDMMRQA&usqp=CAU" alt="aweds" /> */}
           <ul className='awardsUl2'>
             {/* <li><h3>Looking for the value behinde</h3></li>
             <li><h3>deep communication with customer</h3></li> */}
             <li><h3>spent every second and coin on core value</h3></li>
             <li><h3>our website shows our om principle</h3></li>
           </ul>
          
         </div>

      </div>

      <small>* uhmm, they can only say like that because they don't get any awards yet D:)</small>

      



    </div>
  )
}
