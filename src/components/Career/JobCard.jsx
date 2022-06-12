import React, {useState, useEffect, useContext} from 'react'
import Context from '../../context/context'
import {Link} from 'react-router-dom'
import Form from '../Contact/Form'


function JobCard() {

const {jobs, setJobs, useEffect, job, setJob} = useContext(Context);

  return ( 
    <div>
        {job.map((item) => 
            <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.company}</p>
                <p>{item.location}</p>
                <p>{item.description}</p>
                <p>Posted at: {item.date}</p>
            </div>)}
            <div>
                <h2>Apply to this job opening here:</h2>
                <Form/>
            </div>
            <Link to='/career'><button>Back to all job openings</button></Link>
    </div>
  )
}

export default JobCard