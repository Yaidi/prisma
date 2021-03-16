import React from 'react';
import CardHeroine from '../components/CardHeroine';
import { arrayHeroines } from '../data/arrayHeroines';
import Style from '../styles/CardHeroine.module.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const Menu = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Header title="Elige a tu heroína" />
        <div className={`container-fluid row ${Style.container}`}>
          {arrayHeroines.map((heroine, index) => (
            <section
              className={`${Style.card} col-md-6 col-lg-4 my-3`}
              style={{ width: '18rem' }}
              key={index}
            >
              <CardHeroine
                image={heroine.image}
                name={heroine.name}
                description={heroine.description}
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
