import React from 'react';
import style from './Contacts.module.css';
import styleC from "../common/styles/Container.module.css";
import Title from "../common/components/Title";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleC.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'}/>
                    <form action="#" className={style.form}>
                            <input type={'text'} id={'fname'} name={'firstName'}
                                   placeholder={'Your name'}/>
                            <input type={'text'} id={'lname'} name={'lastName'}
                                   placeholder={'Your last name'}/>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                    </form>
                <button type={'submit'} className={style.button}>Send</button>
            </div>
        </div>
    );
};

export default Contacts;