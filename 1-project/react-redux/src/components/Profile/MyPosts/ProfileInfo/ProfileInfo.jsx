import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return(
  <div >
        <div>
            <img className="z"
                 src='https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg'
                 alt='photo'/>
        </div>
        <div className={s.descriptionBlock}>
            Ava+description
        </div>
    </div>
    )

}
export default ProfileInfo;