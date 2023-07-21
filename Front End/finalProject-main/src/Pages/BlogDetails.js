import React, { useRef } from "react";
import "./blogDetails.css";
import userImage from "../images/profile-image/user_image.webp";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addComment, getComments } from "../Redux/Slices/CommentSlice";
import { useEffect } from "react";
import { getBlogById } from "../Redux/Slices/BlogSlice";
import BlogComment from "../Components/BlogComment/BlogComment";

export default function BlogDetails() {
  const { oneBlog } = useSelector((state) => state.BlogSlice);
  const { comments } = useSelector((state) => state.CommentSlice);
  console.log(comments);
  console.log(oneBlog);
  const api = "http://localhost:4000/";
  const userId = localStorage.getItem("id");
  const postId = localStorage.getItem("blogId");
  const [comment, setComment] = useState({
    content: "",
    author: userId,
    blogPost: postId,
  });
  const dispatch = useDispatch();
  const textareaRef = useRef();


  function handleComment(e) {
    comment.content = e.target.value;
    setComment(comment);
  }

  function submitComment() {
    dispatch(addComment(comment)).then(() => {
      dispatch(getComments(postId));
      setComment({ ...comment, content: "" }); // Reset the content of the comment state
      if (textareaRef.current) {
        textareaRef.current.value = ""; // Reset the value of the textarea element
      }
    });
  }
  
  
  useEffect(() => {
    dispatch(getBlogById(postId));
    dispatch(getComments(postId));
  }, []);

  return (
    <div className="container">
      <div className="blog-container">
        <div className="single-blog">
          <h3 className="blog-title">{oneBlog.title}</h3>
          <img src={`${api}${oneBlog.image}`} alt="blog" />
          <div className="blog-body">
            <div className="blog-body_head">
              <img src={userImage} alt="user_image" />
              <span>
                <span className="username"> {oneBlog.user?.name} </span>
                <span className="date"> {oneBlog.date} </span>
              </span>
            </div>
            <div className="blog-body_text">
              <p>{oneBlog.content}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="addComment">
      <textarea
          className="form-control my-5"
          onChange={handleComment}
          defaultValue={comment.content}
          ref={textareaRef} // Assign the ref to the textarea element
        ></textarea>
        <span
          className="send-icon"
          onClick={submitComment}
        >
          <ion-icon name="send" size="small"></ion-icon>
        </span>
      </div>
      <div>
        {comments.map((item, key) => {
          return <BlogComment comment={item} key={key} />;
        })}
      </div>
    </div>
  );
}
