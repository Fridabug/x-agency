import React from 'react'
import ContactForm from './ContactForm'
import {useContext} from 'react'
import Context from '../../context/context'

export default function Contact() {

  const {submit} = useContext(Context);

  return (
    <div className='contact-container'> 
      <ContactForm/>
    </div>
  )
}
