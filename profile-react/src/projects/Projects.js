import React from 'react';
import style from './Projects.module.scss'
import styleC from './../common/styles/Container.module.css';
import Project from './project/Project';
import Title from '../common/components/Title';
import social from '../assets/image/socialNetwork.jpg'
import todolistImg from '../assets/image/todolist.jpg'

const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${social})`
    }
    const todolist = {
        backgroundImage: `url(${todolistImg})`
    }
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleC.container} ${style.projectsContainer}`}>
               <Title title={'Projects'}/>
                <div className={style.projects}>
                    <Project style={socialNetwork} title={'Social network'} description={'Projects description about social network. Tools... bla bla bla bla bla bla bla'}/>
                    <Project style={todolist} title={'Todolist'} description={'Projects description about todolist'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;