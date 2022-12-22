import React from 'react';
import style from './Skills.module.scss'
import styleC from './../common/styles/Container.module.css';
import Skill from "./skill/Skill";
import Title from "../common/components/Title";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleC.container} ${style.skillsContainer}`}>
                <Title title={'My skills'}/>
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