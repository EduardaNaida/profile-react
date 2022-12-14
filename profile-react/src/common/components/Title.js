import React from 'react';
import style from "./Title.module.css";

const Title = (props) => {
    return (
        <div>
            <h2 className={style.title}>{props.title}</h2>
        </div>
    );
};

export default Title;