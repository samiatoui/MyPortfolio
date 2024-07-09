import Contact from './Contact';
import MenuItems from "./MenuItems";

export default function About() {
    return (
        <div className="about">
            <div className='about-text'>
                <h1>Hi👋, I'm Sami Atoui</h1>
                <p>A Software Developer</p>
                <div className="about-btn">
                    <MenuItems />
                </div>
            </div>
        </div>
    )
}


