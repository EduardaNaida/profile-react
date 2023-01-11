import React from 'react';
import style from './Footer.module.scss'
import styleC from './../common/styles/Container.module.css';
import Items from "./Items";
import Title from "../common/components/Title";
import instagramIcon from "../assets/image/github-svgrepo-com.svg";

const Footer = () => {
    const instagram = {
        backgroundImage: `url(${instagramIcon})`
    }
    return (
        <div className={style.footerBlock}>
            <div className={`${styleC.container} ${style.footerContainer}`}>
                {/*<h1 className={style.text}>Eduarda Milinkevich</h1>*/}
                <Title className={style.title} title={'Eduarda Milinkevich'}/>
                <div className={style.items}>
                    <Items style={instagram} item={'Facebook'}/>
                    <Items style={instagram} item={'Instagram'}/>
                    <Items style={instagram} item={'Linkedin'}/>
                    <Items style={instagram} item={'Github'}/>
                </div>
                <h3 className={style.text}>2022 All rights reserved</h3>
            </div>
        </div>
    );
};

export default Footer;