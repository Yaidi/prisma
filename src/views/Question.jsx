import React from 'react';
import { arrayQuestions } from '../data/arrayQuestions';
import Style from '../styles/Question.module.css';
import StoryQuestion from '../components/StoryQuestion';
import Header from '../components/Header';
const Question = () => {
  const question = arrayQuestions[0].qa;
  const answers = arrayQuestions[0].answers;
  return (
    <div>
      <Header title='Nivel 1' />
      <div className={`${Style.container}`}>
        <StoryQuestion />

        <form className={`row ${Style.text}`}>
          <h5>{question}</h5>
          {answers.map((answer, index) => (
            <section>
              <input
                type='radio'
                className={'form-check-input'}
                id={index}
                name='qa'
                value={index}
              />
              <label htmlFor={index}>{answer}</label>
            </section>
          ))}
          <button
            type='submit'
            className={`btn btn-lg btn-block ${Style.button}`}
          >
            ENVIAR RESPUESTA
          </button>
        </form>
      </div>
    </div>
  );
};
export default Question;
