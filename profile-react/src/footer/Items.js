import React from 'react';
import style from './Items.module.scss'

const Items = (props) => {
    return (
        <div className={style.itemsBlock}>
            <div style={props.style}></div>
            <span className={style.items}>{props.item}</span>
        </div>
    );
};

export default Items;