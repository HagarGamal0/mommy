import React from 'react'
import './blogComment.css'
import userImage from '../../images/profile-image/user_image.webp'
import moment from 'moment/moment';


export default function BlogComment({comment}) {


  return (
   <>
   <div className="comment-container">
      <div className="single-comment">
        <div className="comment-body">
          <div className="comment-body_head">
            <img src={comment.author.image || userImage} alt="user_image" />
            <span>
              <span className="username"> {comment.author.name}</span>
              <span className="date"> {moment(comment.date).local().format("LLLL")} </span>
            </span>
          </div>
          <div className="comment-body_text">
            <p>
            {comment.content}
            </p>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}
