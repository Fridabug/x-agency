import React, {useState, useEffect, useContext} from 'react'
import Context from '../../context/context'
import {Link} from 'react-router-dom'

export default function ShowAllOpenings() { 

const {jobs, setJobs, useEffect, selectJobHandler, job, setJob} = useContext(Context);


  return (
    <div>
    {jobs.map((job, index) => 
      <div key={job.id}>
          <h1>{job.title}</h1>
          <p>{job.location}, {job.company}</p>
          <p>{job.date}</p>
          <Link to={`/career/${job.title}`}><button name={job.id} onClick={ selectJobHandler}>Read more</button></Link>
      </div>)}
    </div>
  )
}
