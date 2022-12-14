import './App.css';
import Header from "./header/Header";
import style from './App.css'
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import Hire from "./hire/Hire";

const App = () => {
    return (
        <div className={style.app}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Hire/>
            <Footer/>
        </div>
    );
}

export default App;
