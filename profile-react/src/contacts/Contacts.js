import React from 'react';
import style from './Contacts.module.scss';
import styleC from "../common/styles/Container.module.css";
import Title from "../common/components/Title";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleC.container} ${style.contactsContainer}`}>
                <Title className={style.title} title={'Contacts'}/>
                    <form action="#" className={style.form}>
                            <input type={'text'}
                                   className={style.input}
                                   id={'name'}
                                   name={'name'}
                                   placeholder={'Your name'}/>
                            <input type={'text'}
                                   className={style.input}
                                   id={'email'}
                                   name={'email'}
                                   placeholder={'Your email'}/>
                            <textarea name="" id="" cols="30"
                                      placeholder={'Message..'}
                                      className={style.textarea}
                                      rows="10"></textarea>
                    </form>
                <button type={'submit'} className={style.button}>Send</button>
            </div>
        </div>
    );
};

export default Contacts;