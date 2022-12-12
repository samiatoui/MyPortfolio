import "./contact.css";
import github from "../about/github.svg"
import email from "../about/envelope-solid.svg"
import linked from "../about/linkedin.svg"

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-item">
                <a href="https://www.linkedin.com/in/samiatoui/" target="_blank"><img src={linked}></img></a>
            </div>
            <div className="contact-item">
                <a href="mailto:atoui79@gmail.com" target="_blank"><img src={email}></img></a>
            </div>
            <div className="contact-item">
                <a href="https://github.com/samiatoui/" target="_blank"><img src={github}></img></a>
            </div>

        </div>
    )
}
