import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
      <div className={s.item}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuNwUpkySP3sdWzUU9dmyPFOOqH6TygVefHg&usqp=CAU' alt="" />
       {props.message}
        <div>
          <span>Like</span>{props.likesCount}
        </div>
      </div>
  )

}
export default Post;