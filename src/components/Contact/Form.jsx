import React, {useState, useEffect, useContext} from 'react'
import Context from '../../context/context'
import {Link} from 'react-router-dom'

function Form() {

    const { userMessage, setUserMessage, allMessages, setAllMessages, submit, setSubmit, formErrors, setFormErrors, onInputChange, onSubmitMessage, validate, handleResubmit, useEffect} = useContext(Context);
  return (
    <div>
    {Object.keys(formErrors).length === 0 && submit ? (
        <div className='msg-submit'>
          <h1>Thank you for your message!</h1>
          <Link to='/'>Home</Link>
        </div>) : 
        (<form onSubmit={onSubmitMessage} className='form'>
          <div className='inputContainer'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' onChange={onInputChange}/>
          </div>
          <p>{formErrors.name}</p>
          <div className='inputContainer'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' onChange={onInputChange}/>
          </div>
          <p>{formErrors.email}</p>
          <div className='inputContainer'>
            <label htmlFor='message'>Your message</label>
            <textarea id='message' name='message' placeholder='Say hi!' onChange={onInputChange}></textarea>
          </div>
          <p>{formErrors.message}</p>
          <button type='submit'>Send message</button>
        </form>)}
    </div>
  )
}

export default Form