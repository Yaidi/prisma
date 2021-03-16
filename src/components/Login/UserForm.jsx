import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import 'firebase/auth';
import AuthGoogle from './AuthGoogle';
import Style from '../../styles/Login.module.css';

import { sendData } from './helpers';

const UserForm = ({ windowChoose, hash }) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <div id={windowChoose}>
      <h1 className={`${Style.title}`}> ¡Bienvenida! </h1>
      <p className={`${Style.message}`}>
        {windowChoose === 'Login'
          ? 'Inicia Sesión para continuar'
          : 'Regístrate'}
      </p>
      <form
        onSubmit={sendData({
          windowChoose,
          setError,
          email,
          password,
          history,
        })}
      >
        {error && <div className={`${Style.error}`}>{error}</div>}
        <div className={'mb-3'}>
          <input
            type="email"
            placeholder="Escribe tu correo"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className={'form-control'}
          />
        </div>
        <div className={'mb-3'}>
          <input
            type="password"
            placeholder="Escribe tu contrseña"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={'form-control'}
          />
        </div>
        <button className={`btn btn-lg btn-block ${Style.btn}`}>
          {windowChoose === 'Login' ? 'INICIAR SESIÓN' : 'REGISTRARME'}
        </button>
      </form>

      <AuthGoogle />

      <p className={`row justify-content-center ${Style.change}`}>
        {windowChoose === 'Login'
          ? '¿Aún no tienes una cuenta?'
          : '¿Ya tienes una cuenta?'}

        <Link to={hash} className={`row justify-content-center ${Style.link}`}>
          {windowChoose === 'Login' ? 'Regístrate' : 'Inicia sesión '}
        </Link>
      </p>
    </div>
  );
};
export default UserForm;
