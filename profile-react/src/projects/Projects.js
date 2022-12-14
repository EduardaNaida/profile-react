import React from 'react';
import style from './Projects.module.css'
import styleC from './../common/styles/Container.module.css';
import Project from "./project/Project";
import Title from "../common/components/Title";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleC.container} ${style.projectsContainer}`}>
               <Title title={'Projects'}/>
                <div className={style.projects}>
                    <Project title={'Projects name'} description={'Projects description'}/>
                    <Project title={'Projects name'} description={'Projects description'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;