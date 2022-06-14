import React, {useContext} from 'react'
import Context from '../../context/context'
import {Link} from 'react-router-dom'
import JobForm from '../Career/JobForm'
import {MdLocationPin, MdBusiness} from 'react-icons/md'
import {BsArrowLeft} from 'react-icons/bs'


function JobCard() {

const {job} = useContext(Context);

  return ( 
    <div className='single-job page-content'>
        {job.map((item) => 
            <div key={item.id}>
                <h1>{item.title}</h1>
                <p><MdLocationPin/> {item.company}</p>
                <p><MdBusiness/> {item.location}</p>
                <h3>About this job</h3>
                <p>{item.description}</p>
                <p>Listed on: {item.date}</p>
            </div>)}
            <JobForm/>
            <Link to='/career'><BsArrowLeft/> Back to all job openings</Link>
    </div>
  )
}

export default JobCard