import React from 'react';
import style from './Items.module.scss'

const Items = (props) => {
    return (
        <div className={style.items}>
            <span>{props.item}</span>
        </div>
    );
};

export default Items;