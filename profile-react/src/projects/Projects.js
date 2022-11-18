import React from 'react';
import style from './Projects.module.css'
import styleC from './../common/styles/Container.module.css';
import Project from "./project/Project";

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleC.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project title={'Projects name'} description={'Projects description'}/>
                    <Project title={'Projects name'} description={'Projects description'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;