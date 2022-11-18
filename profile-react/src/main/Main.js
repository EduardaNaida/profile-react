import style from './Main.module.css';
import styleContainer from './../common/styles/Container.module.css';

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>

                <div className={style.welcomeText}>
                    <span>Hi there!</span>
                    <h1>I am Eduarda Milinkevich</h1>
                    <p>A frontend developer</p>
                </div>
                <div className={style.image}></div>
            </div>
        </div>
    );
}

export default Main;
