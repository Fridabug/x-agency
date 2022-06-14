
import React, { createContext, useEffect, useState } from 'react';
import blogData from "./json/blogs.json" 

const Context = React.createContext()

export function ContextProvider({children}){
    const [blogs, setBlogs]=useState([])

    useEffect(()=>{
        if(blogs.length===0) setBlogs(blogData)
       
    },[])

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

// Career components

const [jobs, setJobs] = useState([])

useEffect(() => {
  fetch('https://retoolapi.dev/Rr1PE4/data')
  .then(res => res.json())
  .then(data => setJobs(data));
}, [])

const [job, setJob] = useState({id: null, title: '', company: '', location: '', description: '', date: ''});

const selectJobHandler = (e) => {
    const selectedJob = jobs.filter((item, index) => item.id == e.target.name);
    setJob(selectedJob);
}


    return (
        <Context.Provider value={{
            userMessage, setUserMessage, allMessages, setAllMessages, submit, setSubmit, formErrors, setFormErrors, onInputChange, onSubmitMessage, validate, handleResubmit, useEffect, blogs,

            jobs, setJobs, job, setJob, selectJobHandler, handleResubmit 
        }}>{children}
        </Context.Provider>
    )
}

export default Context;


