import React, {useState, useEffect, useContext} from 'react'
import Context from '../../context/context'
import {BsArrowLeft} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function JobForm() {

const {formErrors, submit, handleResubmit, onSubmitMessage, onInputChange} = useContext(Context);
  return (
    <div>{Object.keys(formErrors).length === 0 && submit ? (
        <div className='msg-submit'>
          <h1>Thank you for your application!</h1>
          <Link to='/' onClick={handleResubmit}><BsArrowLeft/> Home</Link>
        </div>) : 

        (<div>
          <div>
            <h1>Apply to this job directly!</h1>
          </div>
         <form onSubmit={onSubmitMessage} className='form'>
         <div className='inputContainer'>
           <label htmlFor='name'>Name</label>
           <input type='text' name='name' id='name' onChange={onInputChange}/>
         </div>
         <p className='error'>{formErrors.name}</p>
         <div className='inputContainer'>
           <label htmlFor='email'>Email</label>
           <input type='email' name='email' id='email' onChange={onInputChange}/>
         </div>
         <p className='error'>{formErrors.email}</p>
         <div className='inputContainer'>
           <label htmlFor='message'>Motivation letter</label>
           <textarea id='message' name='message' placeholder='Your motivation letter' onChange={onInputChange}></textarea>
         </div>
         <p className='error'>{formErrors.message}</p>
         <div className='inputContainer'>
            <label htmlfor='resume'>Attach CV</label>
            <input type="file" name="upload" id='resume' accept="application/pdf,application/vnd.ms-excel" />
         </div>
         <button type='submit'>Submit Application</button>
       </form>
       </div>)
        }</div>
  )
}

export default JobForm