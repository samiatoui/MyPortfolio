
export default function RepoList() {
    return (
        <div className="repo-main">
            <h1>Projects</h1>
            <div className="repo-container">
                <div className="repo-item">
                    <div className="repo-img">
                        <img src="https://i.imgur.com/RXDMzKV.png" ></img>
                    </div>
                    <div className="repo-info">
                        <h2>AEUSB</h2>
                        <h4>Made with: Wordpress</h4>

                        <p>A project created for l'Association Étudiante de l'Université de Saint-Boniface to enhance student involvement.</p>
                        <p>Services provided: Web Development, Website upkeep and maintenance, Web hosting.</p>

                        <a href="https://aeusb.ca">
                            <button>Live</button>
                        </a>
                    </div>
                </div>

                <div className="repo-item">
                    <div className="repo-img">
                        <img src="https://i.imgur.com/bOfHaQZ.png" ></img>
                    </div>
                    <div className="repo-info">
                        <h2>Colorpal</h2>
                        <h4>Made with: React</h4>

                        <p>A dynamic color palette generator powered by an API</p>
                        <p> A personal project made to practice React and API calls.</p>

                        <a href="https://samiatoui.github.io/colorpal/">
                            <button>Live</button>
                        </a>
                    </div>

                </div>

                <div className="repo-item">
                    <div className="repo-img">
                        <img src="https://i.imgur.com/UO2VfDQ.png" ></img>
                    </div>
                    <div className="repo-info">
                        <h2>Discord Clone</h2>
                        <h4>Made with: React, Firebase, 0Auth</h4>

                        <p>A chat room application designed to replicate the look and feel of Discord, utilizing Firebase for real-time message storage.</p>
                        <p> A personal project made to practice React and Firebase databases.</p>

                        <a href="https://samiatoui.github.io/samicord/">
                            <button>Live</button>
                        </a>
                    </div>

                </div>

                <div className="repo-item">
                    <div className="repo-img">
                        <img src="https://i.imgur.com/iDL3rCV.png" ></img>
                    </div>
                    <div className="repo-info">
                        <h2>To Do list</h2>
                        <h4>Made with: React</h4>

                        <p>A simple yet effective to-do list app developed with React.</p>
                        <p> A personal project made to practice React.</p>

                        <a href="https://samiatoui.github.io/mytodo/">
                            <button>Live</button>
                        </a>
                    </div>

                </div>
            </div>
        </div >
    )
}