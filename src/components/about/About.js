import "./about.css";
import Contact from '../contact/Contact';
export default function About() {
    return (

        <div className="about">
            <div className="text">
                <h3 className="hi">Hi, I'm</h3>
                <h1>Sami Atoui</h1>
                <div className="title-contact">    <h2>Software Developer.</h2> <Contact /></div>
                <div className="bio">
                    <div className="bio-text"> <p>I'm a software developer with a passion for building web applications and diving into and learning new technologies.</p></div>
                    <img src="https://i.imgur.com/h4QL944.jpg" className="imgsami" alt="Sami Atoui"></img>
                </div>

            </div>
        </div>
    )
}


