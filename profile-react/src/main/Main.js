import style from './Main.module.scss';
import styleC from "../common/styles/Container.module.css";

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleC.container} ${style.mainContainer}`}>
                <div className={style.welcomeText}>
                    <span>Hi There!</span>
                    <span>I am <span>Eduarda Milinkevich</span></span>
                    <h1>Frontend Developer</h1>
                </div>
                <div className={style.image}>
                    <img src={require("../assets/image/IMG_2580.jpg")} alt=""
                    className={style.image}/>
                </div>
            </div>
        </div>
    );
}

export default Main;
