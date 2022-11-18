import React from 'react';
import style from "../../projects/project/Project.module.css";

const Project = (props) => {
    return (
        <div className={style.project}>

            <div className={style.icon}>
                Image
                <div className={style.button}>
                    <p>View</p>
                </div>
            </div>

            <div className={style.title}>
                <span>{props.title}</span>
            </div>
            <div className={style.description}>
                <span>
                {props.description}
            </span>
            </div>

        </div>
    );
};

export default Project;