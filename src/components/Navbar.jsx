import React from 'react';
import Style from '../styles/navbar.module.css';
import {Link} from 'react-router-dom';

const Navbar = ()=>{
    return(
        <nav className={`navbar fixed-bottom ${Style.nav}`}>
                <Link to='/Menu'><button className={`container-icon ${Style.btnicon}`}><img className={`icon ${Style.icon}`} src="https://firebasestorage.googleapis.com/v0/b/prismacoders.appspot.com/o/icons%2Fheart.png?alt=media&token=9e711c5e-5653-495f-8d2e-0b5c6b8734cf" alt="Heart"/>Heroínas</button></Link>
                <Link to='/Menu'><button className={`container-icon ${Style.btnicon}`}><img className={`icon ${Style.icon}`} src="https://firebasestorage.googleapis.com/v0/b/prismacoders.appspot.com/o/icons%2Fcheck.png?alt=media&token=840c2259-ddcb-4981-ba35-640e39168cb1" alt="Heart"/>Progreso</button></Link>
                <Link to='/Menu'><button className={`container-icon ${Style.btnicon}`}><img className={`icon ${Style.icon}`} src="https://firebasestorage.googleapis.com/v0/b/prismacoders.appspot.com/o/icons%2Fgift.png?alt=media&token=3c9d22c5-c832-4e57-9535-8fd7a866b8a1" alt="Heart"/>Recompensas</button></Link>
                <Link to='/Menu'><button className={`container-icon ${Style.btnicon}`}><img className={`icon ${Style.icon}`} src="https://firebasestorage.googleapis.com/v0/b/prismacoders.appspot.com/o/icons%2Fprofile.png?alt=media&token=11a42a88-f770-4914-bd0b-71ef94a657a5" alt="Heart"/>Perfil</button></Link>
        </nav>
    )
}
export default Navbar;
