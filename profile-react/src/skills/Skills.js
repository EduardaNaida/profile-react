import React from 'react';
import style from './Skills.module.css'
import styleC from './../common/styles/Container.module.css';
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleC.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>
                    <Skill title={'Js'} description={'About js'}/>
                    <Skill title={'CSS'} description={'About css'}/>
                    <Skill title={'HTML'} description={'About html'}/>
                    <Skill title={'HTML'} description={'About html'}/>
                    <Skill title={'HTML'} description={'About html'}/>
                    <Skill title={'HTML'} description={'About html'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;