import React from 'react';
import style from './Skills.module.scss'
import styleC from './../common/styles/Container.module.css';
import Skill from "./skill/Skill";
import Title from "../common/components/Title";
import jsIcon from "../assets/image/js-official-svgrepo-com.svg";
import reduxIcon from "../assets/image/redux-logo-svgrepo-com.svg";
import reactIcon from "../assets/image/react-svgrepo-com.svg";
import cssIcon from "../assets/image/css-svgrepo-com.svg";
import htmlIcon from "../assets/image/html-svgrepo-com.svg";
import typeScriptIcon from "../assets/image/typescript-svgrepo-com.svg";

const Skills = () => {
    const js = {
        backgroundImage: `url(${jsIcon})`
    }
    const redux = {
        backgroundImage: `url(${reduxIcon})`
    }
    const react = {
        backgroundImage: `url(${reactIcon})`
    }
    const css = {
        backgroundImage: `url(${cssIcon})`
    }
    const html = {
        backgroundImage: `url(${htmlIcon})`
    }
    const typeScript = {
        backgroundImage: `url(${typeScriptIcon})`
    }
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleC.container} ${style.skillsContainer}`}>
                <Title className={style.titleSkill} title={'Skills'}/>
                <div className={style.skills}>
                    <Skill style={js} title={'Js'} description={'About js'}/>
                    <Skill style={typeScript} title={'TypeScript'} description={'About typeScript'}/>
                    <Skill style={react} title={'React'} description={'About react'}/>
                    <Skill style={redux} title={'Redux'} description={'About redux'}/>
                    <Skill style={css} title={'CSS'} description={'About css'}/>
                    <Skill style={html} title={'HTML'} description={'About html'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;