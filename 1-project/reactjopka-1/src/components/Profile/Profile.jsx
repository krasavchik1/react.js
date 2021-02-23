import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
  return <div>
    <div> 
      <img className="z" src='https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg' alt='photo' />
    </div>
    <div className={s.ava}>
      Ava+descr
      </div>
    <MyPosts />
  </div>


}
export default Profile;