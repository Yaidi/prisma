import React from 'react';
import {Link} from 'react-router-dom';
import { arrayLevels } from '../data/arrayLevels';
import Style from '../styles/Levels.module.css';
import next from '../images/next.svg';
import coin from '../images/coin.png';

const Levels = ({ match }) =>{
    const heroine = match.params.id;
    const levelsHeroine= arrayLevels.filter(level => level.heroine === heroine);
    const levels = levelsHeroine[0].levels;
    return(
        <div>
           { levels.map((level, index)=>
            <section className={`card mb-3 ${Style.bgcard}`} key={index}>
            <div className="card-body row g-0">
            <div className="col-md-4">
                <img src={coin} className={`${Style.money}`} alt='points'/>
            </div>
            <div className={`col-md-6 ${Style.text}`}>
               <h5 className={`card-title  ${Style.title}`}>Nivel {index + 1}</h5>
            <p>
            {level}
            </p>
            </div>
            <section className={`col`}>
            <Link to={`/level${index+1}/${heroine}`}>
            <img src={next} className={` ${Style.next}`} alt='choose'/>
            </Link>
            </section>
               </div>
            </section>
           )

           }
        </div>
    )
        
}
export default Levels;
