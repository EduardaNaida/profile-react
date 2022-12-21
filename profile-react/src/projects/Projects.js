import React from 'react';
import style from './Projects.module.css'
import styleC from './../common/styles/Container.module.css';
import Project from './project/Project';
import Title from '../common/components/Title';

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleC.container} ${style.projectsContainer}`}>
               <Title title={'Projects'}/>
                <div className={style.projects}>
                    <Project title={'Social network'} description={'Projects description about social network. Tools... bla bla bla bla bla bla bla'}/>
                    <Project title={'Todolist'} description={'Projects description about todolist'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;