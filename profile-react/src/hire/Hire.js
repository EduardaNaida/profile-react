import React from 'react';
import style from './Hire.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/components/Title";

const Hire = () => {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <Title title={'I\'m available for Freelance!'}/>
                <a href="#" className={style.hireBtn}>HIRE ME</a>
            </div>
        </div>
    );
};

export default Hire;