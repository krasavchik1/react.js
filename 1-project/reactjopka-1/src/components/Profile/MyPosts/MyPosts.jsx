import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>

      </div>
      <div className={s.post}>
        <Post message='My first post' likesCount=' 30' />
        <Post message='Where is my like?' likesCount=' 50'/>
        <Post message='How are you guys?' likesCount=' 3'/>
      </div>
    </div>
  )

}
export default MyPosts;