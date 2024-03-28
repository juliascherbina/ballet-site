import React from "react";
import '../App.css'
import photo from '../Photo/photo_2024-02-22_14-59-31 (2).jpg'
import photo2 from '../Photo/photo_2024-02-22_14-59-31.jpg'
import photo3 from '../Photo/photo_2024-02-22_14-59-32.jpg'



export const Header = () => {

  return <>
    <div className="header">
      <div className="header-items">
        <p className="header-text">  Relax and Stretch your body with Yuliia </p>
      </div>
      <img className="header-img" src={photo} />
      <img className="header-img" src={photo2} />
      <img className="header-img" src={photo3} />
    </div>
  </>
}