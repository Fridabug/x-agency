import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../../context/context'
import SingleBlog from './SingleBlog'

export default function Blog() {
  const {blogs} = useContext(Context)
  return (
    <div className='blogsContainer'>
      {/* {blogs && JSON.stringify(blogs)} */}
      {console.log(blogs)}
      {blogs.blogs && blogs.blogs.map((x,i)=> (
        <div key={i} className="card m-2" style={{width: "16rem"}}>
        <div className="card-body">
          <img src={"https://picsum.photos/300/200?grayscale&blur=2&random="+i+1} alt="" />
          <h5 className="card-title">{x.title}</h5>
          <div className='d-flex justify-content-between'>
          {/* <h6 className="card-subtitle mb-2 text-muted">{x.author}</h6>
          <h6 className="card-subtitle mb-2 text-muted">{x.time}</h6> */}

          </div>
          
          {/* <p className="card-text pTagInBlogs">{x.body[0].section}</p> */}
          <Link className='blogsLink' to={"/blog/"+x.id} element={ <SingleBlog /> }>More Info</Link>
      
        </div>
      </div>
      )  )}
    </div>
  )
}
