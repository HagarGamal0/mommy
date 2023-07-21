import React, { useState } from 'react'
import BlogCards from '../Components/BlogCards/BlogCards';
import './blog.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../Redux/Slices/BlogSlice';
import AddBlog from '../Components/AddBlog/AddBlog';
const pageSize = 12;

function Blog() {
  const {blogs} = useSelector(state => state.BlogSlice)
  const[currentPage,setCurrentPage]=useState(1);
  const dispatch = useDispatch();
  let noOfPages =  1 ;


  const changeCurrentPage = (page)=>{
    setCurrentPage(page);
  };
  let itemsToRender = blogs;
  // paganation
  noOfPages = Math.ceil(itemsToRender.length/pageSize);
  const pages = Array(noOfPages).fill(0).map((item,i) => i+1);
  const start = currentPage * pageSize-pageSize;
  const end = start + pageSize;
  itemsToRender = itemsToRender.slice(start,end);

  useEffect(()=>{
    dispatch(getBlogs())
  },[dispatch]);
  return (

    <div className="Blog">

        <div className="container">
            <div className="title-blog">
                <h1>المقالات</h1>
            </div>
            <AddBlog />
            <div className="blog-contant">
              <div className='card-info'>
              {
                  itemsToRender.map((blog)=>{
                    return <BlogCards blog ={blog} key={blog.id}/>
                  })
                }
              </div>
            </div>
        </div>
        <div className="bar">
        {pages?.map((page) => (
          <button
            onClick={() => changeCurrentPage(page)}
            key={page}
            className={`btn ${currentPage === page ? "btn-active" : ""}`}
          >
            {page}
          </button>
        ))}
      </div>
        
        
    </div>
  )
}

export default Blog;