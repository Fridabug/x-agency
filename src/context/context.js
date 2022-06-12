import React, { createContext, useEffect, useState } from 'react';
import blogData from "./json/blogs.json" 

export const Context = createContext()

export function ContextProvider({children}){
    const [blogs, setBlogs]=useState([])

    useEffect(()=>{
        if(blogs.length===0) setBlogs(blogData)
       
    },[])

    



    return ( <Context.Provider value={
        blogs
    }>{children}</Context.Provider> )
} 