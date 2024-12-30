import Contact from './Contact';
import MenuItems from "./MenuItems";

export default function About() {
    return (
        <div className="about">
            <div className='about-text'>
                <p style={{ fontSize: '18px', opacity: '0.5' }}>Hello! I am</p>
                <p>Sami Atoui</p>
                <p style={{ color: 'rgb(173, 0, 107)', fontSize: '18px' }}>Software Developer</p>
                <br></br>
                <p style={{ fontSize: '20px'}}>I’m a Software Developer from Winnipeg, Manitoba, Canada. I love building web and mobile apps that are both functional and fun to use. Whether it’s a full-time project or freelance work, I enjoy solving problems and bringing ideas to life with code.</p>
                <br></br>
                <div className="about-btn">
                    <MenuItems />
                </div>
            </div>
            <div className='about-picture'>
                <img src="https://i.imgur.com/urDP0gd.png"></img>
            </div>
        </div>
    )
}


