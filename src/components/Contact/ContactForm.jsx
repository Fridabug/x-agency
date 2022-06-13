import React, {useState, useEffect, useContext} from 'react'
import Context from '../../context/context'
import {BsArrowLeft} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function Form() {

    const { submit, handleResubmit, formErrors, onInputChange, onSubmitMessage } = useContext(Context);
  return (
    <div>
    {Object.keys(formErrors).length === 0 && submit ? (
        <div className='msg-submit'>
          <h1>Thank you for your message!</h1>
          <Link to='/' onClick={handleResubmit}><BsArrowLeft/> Home</Link>
        </div>) : 

        (<div>
          <div>
            <h1>Get in touch!</h1>
            <p>Do you have a question or any kind of inquiry? Send us a message and we will get back to</p>
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
           <label htmlFor='message'>Your message</label>
           <textarea id='message' name='message' placeholder='Say hi!' onChange={onInputChange}></textarea>
         </div>
         <p className='error'>{formErrors.message}</p>
         <button type='submit'>Send message</button>
       </form>
       </div>)
        }
    </div>
  )
}

export default Form