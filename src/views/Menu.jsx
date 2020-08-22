import React from 'react';
import CardHeroine from '../components/CardHeroine';
import { arrayHeroines } from '../data/arrayHeroines';
import Style from '../styles/CardHeroine.module.css';

const Menu = ()=>{
    return(
        <div className={`container-fluid row`}>
            <h1>Escoge a tu heroína</h1> 
          {arrayHeroines.map((heroine, index)=>
            <section className={`${Style.card} col-md-6 col-lg-4 my-3`} style={{width: '18rem'}}  key={index}>
            <CardHeroine image= {heroine.image} name={heroine.name} description={heroine.description}/>
        </section>
        )}
        </div>
    )
}

export default Menu;
