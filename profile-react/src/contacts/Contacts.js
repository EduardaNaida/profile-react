import React from 'react';
import style from './Contacts.module.css';
import styleC from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleC.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                    <form action="#" className={style.form}>
                            <input type={'text'} id={'fname'} name={'firstName'}
                                   placeholder={'Your name'}/>
                            <input type={'text'} id={'lname'} name={'lastName'}
                                   placeholder={'Your last name'}/>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                    </form>
                <button className={style.button}>Send</button>
            </div>
        </div>
    );
};

export default Contacts;