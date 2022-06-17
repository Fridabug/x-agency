import React, {useState, useEffect, useContext} from 'react'
import Context from '../../context/context'
import {Link} from 'react-router-dom'
import {MdLocationPin, MdBusiness} from 'react-icons/md'

export default function ShowAllOpenings() { 

const {jobs, setJobs, useEffect, selectJobHandler, job, setJob} = useContext(Context);


  return (
    <div className='all-jobs page-content'>
    {jobs.map((job, index) => 
      <div key={job.id} className='job-listing'>
          <h1>{job.title}</h1>
          <p><MdLocationPin/> {job.location}, <MdBusiness/> {job.company}</p>
          <p>{job.date}</p>
          <Link to={`/career/${job.title}`}><button name={job.id} onClick={ selectJobHandler}>Read more</button></Link>
      </div>)}
    </div>
  )
}
