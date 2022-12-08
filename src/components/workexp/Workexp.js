import "./workexp.css";

export default function Workexp() {
    return (
        <div className="exp-main">
            <h1>Work Experience</h1>
            <div className="work-exp">
                <div className="exp-item">
                    <h2>Software Developer</h2>
                    <p>(August 2021 - Current)</p>
                    <p>Department of National Defence, Government of Canada</p>
                    <hr></hr>
                </div>

                <div className="exp-item">
                    <h2>Front-End Developer</h2>
                    <p>(May 2021 - August 2021)</p>
                    <p>Mondo Marketing</p>
                    <hr></hr>
                </div>

                <div className="exp-item">
                    <h2>Student Media Coordinator</h2>
                    <p>(August 2018 - Current)</p>
                    <p>Association Étudiante de l’Université de Saint-Boniface</p>
                </div>
            </div>
        </div>
    )
}
