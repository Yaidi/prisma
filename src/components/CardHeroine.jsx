import React from 'react';
import Style from '../styles/CardHeroine.module.css';
import {Link} from 'react-router-dom';
const CardHeroine = ({image, name, description, w, h}) =>{
    return(
        <div>
             <Link key={name} to={`/levels/${name}`} >
            <div className={`card-body ${Style.bgheroine}`}>
    <img src={image} className={`card-img-top ${Style.img}`} alt={name} />
    </div>
    </Link>
    <div className="card-body">
    <h5 className={`card-title ${Style.name}`}> {'Soy '+ name}</h5>
    <p className={`card-text ${Style.description}`}>
        {description}
    </p>
    </div>
    </div>
    )
}
export default CardHeroine;
