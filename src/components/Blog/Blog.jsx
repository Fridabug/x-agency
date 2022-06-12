import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/context'
import SingleBlog from './SingleBlog'

export default function Blog() {
  const {blogs} = useContext(Context)
  return (
    <div>
      {/* {blogs && JSON.stringify(blogs)} */}
      {blogs && blogs.map((x,i)=> (
        <div key={i} className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{x.title}</h5>
          <div className='d-flex justify-content-between'>
          <h6 className="card-subtitle mb-2 text-muted">{x.author}</h6>
          <h6 className="card-subtitle mb-2 text-muted">{x.time}</h6>

          </div>
          
          <p className="card-text pTagInBlogs">{x.body[0].section}</p>
          <Link to={"/blog/"+x.id} element={ <SingleBlog /> }>Read More</Link>
      
        </div>
      </div>
      )  )}
    </div>
  )
}
