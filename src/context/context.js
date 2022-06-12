import React from 'react'
import {useState, useEffect} from 'react'

const Context = React.createContext()

export function ContextProvider(props){

//Contact Component

    
const [userMessage, setUserMessage] = useState({name: '', email: '', message: ''});
const [allMessages, setAllMessages] = useState([]);
const [submit, setSubmit] = useState(false);
const [formErrors, setFormErrors] = useState({});

const onInputChange = (e) => {
    setUserMessage(prev => ({...prev, [e.target.name]: e.target.value}));
    console.log(userMessage);
}

const onSubmitMessage = (e) => {
    e.preventDefault();
    setAllMessages([...allMessages, userMessage]);
    setFormErrors(validate(userMessage));
    setSubmit(true);
  }


const validate = (values) => {
    const errors = {};
    if(values.name.length === 0) {
      errors.name = 'Name is required!'
    }
    if(!values.email) {
      errors.email = 'Email is required!'
    }
    if (values.message.length === 0) {
      errors.message = 'You are trying to send an empty message.'
    }
    return errors;
  }

useEffect(() => {
    if(Object.keys(formErrors).length === 0 && submit) {
      console.log(userMessage);
    }
  }, [formErrors]);

  const handleResubmit = () => {
    setUserMessage({name: '', email: '', message: ''})
    setSubmit(false);
  }
    return (
        <Context.Provider value={{
            userMessage, setUserMessage, allMessages, setAllMessages, submit, setSubmit, formErrors, setFormErrors, onInputChange, onSubmitMessage, validate, handleResubmit, useEffect
        }}>{props.children}
        </Context.Provider>
    )
}

export default Context;