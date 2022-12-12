import "./workexp.css";

export default function Workexp() {
    return (
        <div className="exp-main">
            <h1>Where I've Worked</h1>
            <div className="work-exp">
                <div className="exp-item">
                    <h1 className="title-job">Department of National Defence, Government of Canada</h1>
                    <h2>Software Developer</h2>
                    <p>(August 2021 - Current)</p>
                </div>
            </div>

            <div className="exp-item">
                <h1 className="title-job">Mondo Marketing</h1>
                <h2>Front-End Developer</h2>
                <p>(May 2021 - August 2021)</p>
            </div>

            <div className="exp-item">
                <h1 className="title-job">Association Étudiante de l’Université de Saint-Boniface</h1>
                <h2>Student Media Coordinator</h2>
                <p>(August 2018 - Current)</p>

            </div>
        </div>
    )
}
