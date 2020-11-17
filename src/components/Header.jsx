import React from 'react';
import Style from '../styles/Header.module.css';
import imageProfile from '../images/imageProfile.svg';

const Header = ({image, title, coins}) =>{
    return(
        <nav className={`navbar fixed-top ${Style.nav}`}>
  <div className="container-fluid">
      <div className={`navbar-brand`} >
      <img src={imageProfile} width="90px" height="87px"
      className={`d-inline-block align-top`} alt="profile" loading="lazy"/>
      <label>{title}</label>
      </div>
      <div className={`d-flex`} >

      </div>
  </div>
</nav>
    )
}
export default Header;
