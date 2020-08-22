/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Style from '../styles/home.module.css';
import {Link} from 'react-router-dom';

const Home = ()=>{
    return(
        <div className={`home-home ${Style.home}`}>
            <section className={`home-onboarding ${Style.onboarding}`}>
                <img className={`home-logo ${Style.logo}`}src="https://firebasestorage.googleapis.com/v0/b/prismacoders.appspot.com/o/logo%2Flogo.png?alt=media&token=03e539ef-4fcf-4036-99d2-c8b50bb8f94e" alt="GirlPoly Logo"/>
                <img className={`home-quote ${Style.quote}`}src="https://firebasestorage.googleapis.com/v0/b/prismacoders.appspot.com/o/onboarding%2Fquote.png?alt=media&token=1e526d2d-c13c-4074-9516-16a4e70a33a2" alt="GirlPoly quote"/>
                <img className={`home-world ${Style.world}`}src="https://firebasestorage.googleapis.com/v0/b/prismacoders.appspot.com/o/onboarding%2Fworld.png?alt=media&token=31f06aa2-2e8c-4473-b030-9b9403fa218b" alt="World"/>
                <img className={`home-girl ${Style.girl}`}src="https://firebasestorage.googleapis.com/v0/b/prismacoders.appspot.com/o/onboarding%2Frosegirl.png?alt=media&token=1a6e18ed-e3bb-47d8-9d5d-ca6be7048c5e" alt="World"/>
                <p className={`home-text ${Style.text}`}>Juega, aprende y sé la heroína del mundo de las finanzas</p>
                <div className={`home-boxbtn ${Style.boxbtn}`}>
                    <Link to='/Register'><button className={`home-skip ${Style.skip}`}>¡Empieza!</button></Link>
                </div>
            </section>
            
        </div>
    )
}

export default Home;
