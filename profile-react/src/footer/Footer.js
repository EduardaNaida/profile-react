import React from 'react';
import style from './Footer.module.scss'
import styleC from './../common/styles/Container.module.css';
import Items from "./Items";
import Title from "../common/components/Title";
import instagramIcon from "../assets/image/instagram.svg";
import githubIcon from "../assets/image/github.svg";
import linkedinIcon from "../assets/image/linkedin.svg";
import telegramIcon from "../assets/image/telegram.svg";
import copyRightIcon from "../assets/image/copyright.svg";

const Footer = () => {
    const instagram = {
        backgroundImage: `url(${instagramIcon})`
    }
    const github = {
        backgroundImage: `url(${githubIcon})`
    }
    const linkedin = {
        backgroundImage: `url(${linkedinIcon})`
    }
    const telegram = {
        backgroundImage: `url(${telegramIcon})`
    }
    const copyRight = {
        backgroundImage: `url(${copyRightIcon})`
    }
    return (
        <div className={style.footerBlock}>
            <div className={`${styleC.container} ${style.footerContainer}`}>
                {/*<h1 className={style.text}>Eduarda Milinkevich</h1>*/}
                <h1 className={style.title}>Eduarda Milinkevich</h1>
                <div className={style.items}>
                    <Items style={telegram} item={'Telegram'}/>
                    <Items style={instagram} item={'Instagram'}/>
                    <Items style={linkedin} item={'Linkedin'}/>
                    <Items style={github} item={'Github'}/>
                </div>
                <div className={style.rights}>
                    <div style={copyRight} className={style.icon}></div>
                    <a className={style.text}>2022 All rights reserved</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;