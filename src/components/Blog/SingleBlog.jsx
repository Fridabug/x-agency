import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../context/context'

export default function SingleBlog() {
    const {id} = useParams()
    const {blogs} =useContext(Context)

    const sBlog = blogs[id-1]
  return (
    <div className='singleBlogContainer'>
        <h1>{sBlog.title}</h1>

        <div className='d-flex justify-content-between'>
            <h5>{sBlog.author}</h5> <h5>{sBlog.time}</h5>
        </div>

        {sBlog.body.map((x,i)=>(
            <section key={i}>
                <h5>{x.sectionTitle}</h5>
                <p>{x.section}</p>
            </section>
        ))}
        
    </div>
  )
}
