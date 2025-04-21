
export default function RepoList() {
    return (
        <div className="repo-main">
            <h1>Projects</h1>
            <div className="repo-container">
                <div className="repo-item">
                    <div className="repo-img">
                        <img src="https://i.imgur.com/h6XNYTN.png" ></img>
                    </div>
                    <div className="repo-info">
                        <h2>Prime Touch Painting</h2>
                        <h4>Made with: Wordpress</h4>

                        <p>A project created for PrimeTouchPainting, a painting company looking to reach more clients and display their services.</p>
                        <p>Services provided: Web Development, Website upkeep and maintenance, Web hosting, SEO optimizations and social media Ad campaigns.</p>

                        <a href="https://primetouchpainting.ca" target="_blank">
                            <button>Live</button>
                        </a>
                    </div>
                </div>

                <div className="repo-item">
                    <div className="repo-img">
                        <img src="https://i.imgur.com/fB3WntQ.png" ></img>
                    </div>
                    <div className="repo-info">
                        <h2>AEUSB</h2>
                        <h4>Made with: Wordpress</h4>

                        <p>A project created for l'Association Étudiante de l'Université de Saint-Boniface to enhance student involvement.</p>
                        <p>Services provided: Web Development, Website upkeep and maintenance, Web hosting.</p>

                        <a href="https://aeusb.ca" target="_blank">
                            <button>Live</button>
                        </a>
                    </div>
                </div>


            </div>
        </div >
    )
}