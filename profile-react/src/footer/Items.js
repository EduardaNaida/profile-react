import React from 'react';
import style from './Items.module.scss'

const Items = (props) => {
    return (
        <div className={style.itemsBlock}>
            <div className={style.icon} style={props.style}></div>
            <span className={style.text}>{props.item}</span>
        </div>
    );
};

export default Items;