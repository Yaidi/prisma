import React from 'react';
import Style from '../styles/Loader.module.css';

const Loading = () =>{
    return(
        <div className={`justify-content-center`}>
            <div className={`${Style.loader}`} ></div>
            <h1 className={`${Style.text}`}>CARGANDO</h1>
        </div>
    )
}
export default Loading;