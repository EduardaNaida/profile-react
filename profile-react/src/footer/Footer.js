import React from 'react';
import style from './Footer.module.css'
import styleC from './../common/styles/Container.module.css';
import Items from "./Items";
import Title from "../common/components/Title";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleC.container} ${style.footerContainer}`}>
                <Title title={'Eduarda Milinkevich'}/>
                <div className={style.items}>
                    <Items item={'Facebook'}/>
                    <Items item={'Instagram'}/>
                    <Items item={'Linkedin'}/>
                    <Items item={'Github'}/>
                </div>
                <h3 className={style.title}>2022 All rights reserved</h3>
            </div>
        </div>
    );
};

export default Footer;